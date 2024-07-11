import app from '@adonisjs/core/services/app'
import SQLite from 'better-sqlite3'
import { Kysely, SqliteDialect } from 'kysely'
import env from '#start/env'
import type { DB } from '#types/db'
const dialect = new SqliteDialect({
  database: new SQLite(app.makePath(env.get('DATABASE_URL'))),
})

export const db = new Kysely<DB>({
  dialect,
})
