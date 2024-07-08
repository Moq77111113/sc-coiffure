import InstagramApi from '#instagram/api/instagram_api';
import InstagramTokenService from '#instagram/services/token_service';
import { inject } from '@adonisjs/core';
import { HttpContext } from '@adonisjs/core/http';
import logger from '@adonisjs/core/services/logger';
@inject()
export default class InstagramCallbackController {
  constructor(
    private readonly tokenService: InstagramTokenService,
    private readonly api: InstagramApi
  ) {}

  public async generateRedirect({ response }: HttpContext) {
    const apiUrl = this.api.getAuthorizationUrl();

    return response.redirect(apiUrl);
  }

  public async handleRedirect({ request, response }: HttpContext) {
    const params = request.qs();
    if (!params.code) {
      return response.status(400).send('Invalid code');
    }

    try {
      await this.tokenService.renewFromCode(params.code);
    } catch (e) {
      logger.error(e.message);
      //TODO: Notify by mail / redirect to page with error
    }
    return response.redirect('/');
  }
}
