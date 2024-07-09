import { Kysely, sql } from 'kysely';
export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable('tokens')
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())
    .addColumn('created_at', 'timestamp', (col) =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .addColumn('name', 'varchar', (col) => col.notNull().unique())
    .addColumn('token', 'varchar', (col) => col.notNull())
    .addColumn('expires_at', 'timestamp')
    .execute();
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable('tokens').execute();
}
