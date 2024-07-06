import { BaseSchema } from "@adonisjs/lucid/schema";
import { randomUUID } from "crypto";

export default class extends BaseSchema {
  protected tableName = "tokens";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid("id").defaultTo(randomUUID()).primary(),
        table.string("name").notNullable().unique(),
        table.string("token").notNullable(),
        table.timestamp("created_at").defaultTo(this.now());
      table.timestamp("updated_at").defaultTo(this.now());
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
