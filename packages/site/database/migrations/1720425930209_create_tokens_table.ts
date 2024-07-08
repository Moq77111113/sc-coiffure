import { Kysely } from 'kysely';
import { typeid } from 'typeid-js';
export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable('tokens')
    .addColumn('id', 'varchar', (col) =>
      col.primaryKey().defaultTo(typeid('tkn').toString())
    )
    .addColumn('created_at', 'timestamp', (col) => col.notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.notNull())
    .addColumn('name', 'varchar', (col) => col.notNull().unique())
    .addColumn('token', 'varchar', (col) => col.notNull())
    .addColumn('expires_at', 'timestamp')
    .execute();
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable('tokens').execute();
}
