import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import InstagramAuthApi from '#instagram/services/instagram_auth_api'
import InstagramTokenService from '#instagram/services/instagram_token_service'

@inject()
export default class InstagramCallbackController {
  constructor(
    private readonly tokenService: InstagramTokenService,
    private readonly api: InstagramAuthApi,
  ) {}

  public async generateRedirect({ response }: HttpContext) {
    const apiUrl = this.api.getAuthorizationUrl()

    return response.redirect(apiUrl)
  }

  public async handleRedirect({ request, response }: HttpContext) {
    const params = request.qs()
    if (!params.code) {
      return response.status(400).send('Invalid code')
    }

    try {
      await this.tokenService.renewFromCode(params.code)
    } catch (e) {
      logger.error(e.message)
      //TODO: Notify by mail / redirect to page with error
    }
    return response.redirect('/')
  }
}
