import env from '#start/env'
import { ResultWithRecoverableError } from '#types/response'
import { FormData, request } from 'undici'
import { Token } from '../types/responses.js'

export default class InstagramAuthApi {
  #clientId = env.get('IG_CLIENT_ID')
  #clientSecret = env.get('IG_CLIENT_SECRET')
  #redirectUrl = env.get('IG_RETURN_URL')
  #apiUrl = env.get('IG_API_URL')
  #graphUrl = env.get('IG_GRAPH_URL')

  #routes = {
    getCode: `${this.#apiUrl}/oauth/authorize`,
    shortToken: `${this.#apiUrl}/oauth/access_token`,
    longToken: `${this.#graphUrl}/access_token`,
    refreshToken: `${this.#graphUrl}/refresh_access_token`,
  }

  public getAuthorizationUrl() {
    const url = new URL(this.#routes.getCode)
    url.search = new URLSearchParams({
      client_id: this.#clientId,
      redirect_uri: this.#redirectUrl,
      scope: 'user_profile,user_media',
      response_type: 'code',
    }).toString()
    return url.toString()
  }

  public async getShortToken(
    code: string,
  ): Promise<ResultWithRecoverableError<Token['Short']>> {
    const formData = new FormData()
    formData.set('client_id', this.#clientId)
    formData.set('client_secret', this.#clientSecret)
    formData.set('grant_type', 'authorization_code')
    formData.set('redirect_uri', this.#redirectUrl)
    formData.set('code', code)

    const { statusCode, body } = await request(this.#routes.shortToken, {
      method: 'POST',
      body: formData,
    })

    const response = (await body.json()) as Record<string, unknown>

    if (statusCode !== 200) {
      return [
        null,
        new Error(
          'error_message' in response
            ? (response['error_message'] as string)
            : 'Failed to retrieve short token',
        ),
      ]
    }

    return [response as Token['Short'], null]
  }

  public async exchangeShortTokenForLongToken(
    shortToken: string,
  ): Promise<ResultWithRecoverableError<Token['Long']>> {
    const url = new URL(this.#routes.longToken)
    url.search = new URLSearchParams({
      grant_type: 'ig_exchange_token',
      client_secret: this.#clientSecret,
      access_token: shortToken,
    }).toString()

    const { statusCode, body } = await request(url.toString(), {
      method: 'GET',
    })

    const response = (await body.json()) as Record<string, unknown>
    if (statusCode !== 200) {
      return [null, new Error('Failed to get long token')]
    }

    return [response as Token['Long'], null]
  }

  public async refreshToken(
    token: string,
  ): Promise<ResultWithRecoverableError<Token['Refresh']>> {
    const url = new URL(this.#routes.refreshToken)
    url.search = new URLSearchParams({
      grant_type: 'ig_refresh_token',
      access_token: token,
    }).toString()

    const { statusCode, body } = await request(url.toString(), {
      method: 'GET',
    })

    const response = (await body.json()) as Record<string, unknown>
    if (statusCode !== 200) {
      return [null, new Error('Failed to refresh token')]
    }

    return [response as Token['Refresh'], null]
  }
}
