import type { HttpContext } from '@adonisjs/core/http'
import { version } from 'os'

export default class UsersController {
  async index({ inertia }: HttpContext) {
    return inertia.render('home', { version: 1 })
  }
}
