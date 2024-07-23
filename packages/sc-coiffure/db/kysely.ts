import SQLite from 'better-sqlite3'
import { Kysely, SqliteDialect } from 'kysely'
import type { DB } from '~/types/db'
export const db = (function () {
  const { databaseUrl } = useRuntimeConfig()
  const dialect = new SqliteDialect({
    database: new SQLite(databaseUrl),
  })

  return new Kysely<DB>({
    dialect,
  })
})()
