import InstagramTokenService from '#instagram/services/token_service';
import { inject } from '@adonisjs/core';
import { BaseCommand } from '@adonisjs/core/ace';
import logger from '@adonisjs/core/services/logger';
import type { CommandOptions } from '@adonisjs/core/types/ace';

export default class IgRefreshToken extends BaseCommand {
  static commandName = 'ig:refresh-token';
  static description = 'Refresh Instagram access token';

  static options: CommandOptions = {};

  @inject()
  async run(instagramTokenService: InstagramTokenService) {
    try {
      await instagramTokenService.refreshToken();
    } catch (error) {
      // Send email to admin
      logger.error(error instanceof Error ? error.message : error);
    }
  }
}
