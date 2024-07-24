import 'dotenv/config';
import SQLite from 'better-sqlite3';
import { Kysely, SqliteDialect } from 'kysely';
import type { DB } from '~/types/db';

const db = (function () {
  const dialect = new SqliteDialect({
    database: new SQLite(process.env.DATABASE_URL),
  });

  return new Kysely<DB>({
    dialect,
  });
})();

const result = await db
  .insertInto('rolling_token')
  .values({ key: 'contact_token', value: 'test', expires_at: Date.now() })
  .executeTakeFirst();

console.log(result.numInsertedOrUpdatedRows);
