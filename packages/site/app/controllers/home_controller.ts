import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
export default class UsersController {
  async index({ inertia }: HttpContext) {
    return inertia.render('home/HomePage', { version: 1 })
  }

  async sbx({ inertia, response }: HttpContext) {
    if (env.get('NODE_ENV') === 'production') {
      return response.status(404).send('Not found')
    }
    return inertia.render('sbx', { version: 2 })
  }
}
