import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ContactController {
  public async handleMessage({ request, response }: HttpContext) {
    console.log(request.all())
    return response.redirect('/')
  }
}
