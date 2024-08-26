import type { Kysely } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable('prices_categories')
    .addColumn('id', 'integer', (col) => col.notNull().primaryKey().autoIncrement())
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('description', 'varchar')
    .addColumn('parent_id', 'integer', (col) =>
      col.references('prices_categories.id').onDelete('cascade'),
    )
    .execute()

  await db.schema
    .createTable('prices')
    .addColumn('category', 'integer', (col) =>
      col.references('prices_categories.id').onDelete('cascade'),
    )
    .addColumn('name', 'varchar', (col) => col.notNull())
    .addColumn('amount', 'numeric', (col) => col.notNull())
    .execute()
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable('prices').execute()
  await db.schema.dropTable('prices_categories').execute()
}
