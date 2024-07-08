import InstagramApi from '#instagram/api/instagram_api';
import TokenRepository from '#tokens/repository/token_repository';
import { inject } from '@adonisjs/core';

@inject()
export default class InstagramTokenService {
  public constructor(
    private readonly api: InstagramApi,
    private readonly tokenRepo: TokenRepository
  ) {}

  public async renewFromCode(code: string) {
    const { access_token } = await this.api.getShortToken(code);

    const { access_token: long, expires_in } =
      await this.api.exchangeShortTokenForLongToken(access_token);

    await this.tokenRepo.addOrUpdate('INSTAGRAM', long, expires_in.toString());
  }

  public async refreshToken() {
    const row = await this.tokenRepo.getOne('INSTAGRAM');

    if (!row) {
      throw new Error('No Instagram token found');
    }

    const { access_token, expires_in } = await this.api.refreshToken(row.token);

    await this.tokenRepo.addOrUpdate(
      'INSTAGRAM',
      access_token,
      expires_in.toString()
    );
  }
}
