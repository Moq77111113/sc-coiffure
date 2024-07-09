import InstagramMediaApi from '#instagram/services/instagram_media_api';
import { Media } from '#instagram/types/responses';
import { inject } from '@adonisjs/core';
import { BaseCommand } from '@adonisjs/core/ace';
import type { CommandOptions } from '@adonisjs/core/types/ace';
import FeedRepository from '../app/feed/repository/feed.repository.js';

export default class IgFetchMedia extends BaseCommand {
  static commandName = 'ig:fetch-media';
  static description = 'Fetch media from Instagram';

  static options: CommandOptions = {};

  #hexaDecimalToTimestamp(hex: string) {
    return parseInt(hex, 16) * 1000;
  }
  async #processPicture(
    picture: Media['data'][number],
    feedRepo: FeedRepository
  ) {
    const asUrl = new URL(picture.media_url);
    const oe = asUrl.searchParams.get('oe');
    if (!oe) {
      this.logger.error(
        `Could not find the outlink expiration time for ${picture.id}`
      );
      return;
    }

    const { caption, media_type, media_url, permalink, timestamp } = picture;

    const expiration = this.#hexaDecimalToTimestamp(oe);
    await feedRepo.addOrUpdate({
      caption,
      media_type,
      media_url,
      permalink,
      expires_at: expiration.toString(),
      external_id: picture.id,
      media_date: new Date(timestamp).getTime().toString(),
    });
  }

  @inject()
  async run(mediaApi: InstagramMediaApi, feedRepo: FeedRepository) {
    const [pics, error] = await mediaApi.userMedia(5);
    if (error) {
      this.logger.error(error.message);
      return;
    }

    for (const pic of pics) {
      await this.#processPicture(pic, feedRepo);
    }
  }
}
