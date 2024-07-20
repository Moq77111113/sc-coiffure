import { contactFormValidator } from '#contact/validators/contact_validator'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
@inject()
export default class ContactController {
  public async handleMessage({ request, inertia }: HttpContext) {
    const [error, payload] = await contactFormValidator.tryValidate(
      request.all(),
    )

    if (error) {
      return 
    }

    console.log(payload)
  }
}
