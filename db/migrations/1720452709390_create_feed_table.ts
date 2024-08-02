import type { Kysely } from 'kysely';
import { sql } from 'kysely';

export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable('feed')
    .addColumn('id', 'integer', (col) => col.primaryKey().autoIncrement())

    .addColumn('external_id', 'varchar', (col) => col.notNull().unique())
    .addColumn('created_at', 'timestamp', (col) =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`),
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`),
    )
    .addColumn('caption', 'text')
    .addColumn('media_url', 'text', (col) => col.notNull())
    .addColumn('media_type', 'varchar', (col) => col.notNull())
    .addColumn('permalink', 'text', (col) => col.notNull())
    .addColumn('expires_at', 'timestamp', (col) => col.notNull())
    .addColumn('media_date', 'timestamp', (col) => col.notNull())
    .execute()
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable('feed').execute()
}
