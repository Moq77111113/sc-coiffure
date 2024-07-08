import env from "#start/env";
import type { HttpContext } from "@adonisjs/core/http";
export default class UsersController {
  async index({ inertia }: HttpContext) {
    return inertia.render("home/Home", { version: 1 });
  }

  async sbx({ inertia, response }: HttpContext) {
    if (env.get("NODE_ENV") === "production") {
      return response.status(404).send("Not found");
    }
    return inertia.render("sbx", { version: 2 });
  }
}
