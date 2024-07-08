// import { BaseModel, column } from "@adonisjs/lucid/orm";
// import { DateTime } from "luxon";

// enum TokenName {
//   IG_SHORT = "ig_short",
//   IG_LONG = "ig_long",
// }
// export default class Token extends BaseModel {
//   @column({ isPrimary: true })
//   declare id: string;

//   @column()
//   declare name: TokenName;

//   @column()
//   declare token: string;

//   @column.dateTime({ autoCreate: true })
//   declare createdAt: DateTime;

//   @column.dateTime({ autoCreate: true, autoUpdate: true })
//   declare updatedAt: DateTime;

//   static upsert(name: TokenName, token: string) {
//     return Token.query().cre
//   }

//   static findByName(name: TokenName) {
//     return Token.query().where("name", name).first();
//   }
// }
