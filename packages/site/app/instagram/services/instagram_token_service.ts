import { inject } from '@adonisjs/core'
import InstagramAuthApi from '#instagram/services/instagram_auth_api'
import TokenRepository from '../../token/repository/token_repository.js'

@inject()
export default class InstagramTokenService {
  public constructor(
    private readonly api: InstagramAuthApi,
    private readonly tokenRepo: TokenRepository,
  ) {}

  public async renewFromCode(code: string) {
    const [shortTokenResponse, shortTokenError] =
      await this.api.getShortToken(code)

    if (shortTokenError) {
      throw shortTokenError
    }

    const [longTokenResponse, longTokenError] =
      await this.api.exchangeShortTokenForLongToken(
        shortTokenResponse.access_token,
      )

    if (longTokenError) {
      throw longTokenError
    }

    await this.tokenRepo.addOrUpdate(
      'INSTAGRAM',
      longTokenResponse.access_token,
      longTokenResponse.expires_in.toString(),
    )
  }

  public async refreshToken() {
    const row = await this.tokenRepo.getOne('INSTAGRAM')

    if (!row) {
      throw new Error('No Instagram token found')
    }

    const [refreshTokenResponse, error] = await this.api.refreshToken(row.token)

    if (error) {
      throw error
    }

    const { expires_in, access_token } = refreshTokenResponse
    await this.tokenRepo.addOrUpdate(
      'INSTAGRAM',
      access_token,
      expires_in.toString(),
    )
  }
}
