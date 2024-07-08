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

    const r = await this.tokenRepo.add(
      'INSTAGRAM',
      long,
      expires_in.toString()
    );

    console.log('result', r.numInsertedOrUpdatedRows);
  }
}
