import InstagramMediaApi from '#instagram/services/instagram_media_api';
import { Media } from '#instagram/types/responses';
import { inject } from '@adonisjs/core';
import { BaseCommand } from '@adonisjs/core/ace';
import type { CommandOptions } from '@adonisjs/core/types/ace';

export default class IgFetchMedia extends BaseCommand {
  static commandName = 'ig:fetch-media';
  static description = 'Fetch media from Instagram';

  static options: CommandOptions = {};

  #hexadecimalTimeStampToDate(hex: string) {
    return new Date(parseInt(hex, 16) * 1000);
  }
  async #processPicture(picture: Media['data'][number]) {
    const asUrl = new URL(picture.media_url);
    const oe = asUrl.searchParams.get('oe');
    if (!oe) {
      this.logger.error(
        `Could not find the outlink expiration time for ${picture.id}`
      );
      return;
    }
  }

  @inject()
  async run(mediaApi: InstagramMediaApi) {
    const [pics, error] = await mediaApi.userMedia(5);
    if (error) {
      this.logger.error(error.message);
      return;
    }

    for (const pic of pics) {
      await this.#processPicture(pic);
    }
  }
}
