import { Kysely } from 'kysely';
import { typeid } from 'typeid-js';

export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable('feed')
    .addColumn('id', 'varchar', (col) =>
      col.primaryKey().defaultTo(typeid('pic').toString())
    )
    .addColumn('external_id', 'varchar', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) => col.notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.notNull())
    .addColumn('caption', 'text')
    .addColumn('media_url', 'text')
    .addColumn('media_type', 'varchar', (col) => col.notNull())
    .addColumn('permalink', 'text', (col) => col.notNull())
    .addColumn('expires_at', 'timestamp', (col) => col.notNull())
    .addColumn('media_date', 'timestamp', (col) => col.notNull())
    .execute();
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable('feed').execute();
}
