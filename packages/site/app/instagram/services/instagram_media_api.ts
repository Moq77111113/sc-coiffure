import { inject } from '@adonisjs/core'
import { request } from 'undici'
import { FieldSet, Media } from '#instagram/types/responses'
import env from '#start/env'
import TokenRepository from '#tokens/repository/token_repository'
import { ResultWithRecoverableError } from '#types/response'

@inject()
export default class InstagramMediaApi {
  static Errors = {
    Token: 'No Instagram token found',
    Media: 'Failed to retrieve user media',
  }
  #graphUrl = env.get('IG_GRAPH_URL')

  #routes = {
    userMedia: `${this.#graphUrl}/me/media`,
  }

  #fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'thumbnail_url',
    'timestamp',
    'username',
    'permalink',
  ] as const satisfies FieldSet[]

  constructor(private readonly tokenRepo: TokenRepository) {}

  async #accessToken(): Promise<ResultWithRecoverableError<string>> {
    const result = await this.tokenRepo.getOne('INSTAGRAM')
    if (!result) {
      return [null, new Error(InstagramMediaApi.Errors.Token)]
    }
    return [result.token, null]
  }

  async userMedia(
    processCount = 5,
    fetchNext = true,
  ): Promise<ResultWithRecoverableError<Media['data']>> {
    const [token, error] = await this.#accessToken()
    if (error) {
      throw error
    }

    let url: string | undefined = this.#buildUrl(
      this.#routes.userMedia,
      token,
      processCount,
    )

    const media: Media['data'] = []

    do {
      const { data, next, error } = await this.#fetchMedia(url)
      if (error) {
        return [null, error]
      }
      media.push(...data)
      url = next
    } while (url && fetchNext)

    return [media, null]
  }

  #buildUrl(base: string, token: string, processCount?: number): string {
    const url = new URL(base)
    const params = new URLSearchParams({
      fields: this.#fields.join(','),
      access_token: token,
    })
    if (processCount) {
      params.set('limit', processCount.toString())
    }
    url.search = params.toString()
    return url.toString()
  }

  async #fetchMedia(
    url: string,
  ): Promise<{ data: Media['data']; next?: string; error?: Error }> {
    try {
      const { statusCode, body } = await request(url)
      const response = (await body.json()) as Record<string, unknown>

      if (statusCode !== 200) {
        const errorMessage =
          (response['error_message'] as string) ||
          InstagramMediaApi.Errors.Media
        return { data: [], error: new Error(errorMessage) }
      }

      const { data, paging } = response as Media
      return { data, next: paging?.next }
    } catch (err) {
      return {
        data: [],
        error: err instanceof Error ? err : new Error('Unable to fetch media'),
      }
    }
  }
}
