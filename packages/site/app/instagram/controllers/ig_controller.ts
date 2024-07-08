import IGService from "#instagram/ig_serivce";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";
@inject()
export default class InstagramController {
  constructor(private readonly igService: IGService) {}

  public async handleRedirect({ request, response }: HttpContext) {
    const params = request.qs();
    if (!params.code) {
      return response.status(400).send("Invalid code");
    }

    await this.igService.getShortToken(params.code);
    response.status(200).send(void 0);
  }
}
