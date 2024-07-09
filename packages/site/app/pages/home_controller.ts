import FeedRepository from '#feed/repository/feed.repository';
import env from '#start/env';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http';

@inject()
export default class UsersController {
  constructor(private readonly feedRepo: FeedRepository) {}

  async index({ inertia }: HttpContext) {
    const feed = await this.feedRepo.feed();
    return inertia.render('home/Home', { feed });
  }

  async sbx({ inertia, response }: HttpContext) {
    if (env.get('NODE_ENV') === 'production') {
      return response.status(404).send('Not found');
    }
    return inertia.render('sbx', { version: 2 });
  }
}
