import SQLite from 'better-sqlite3'
import 'dotenv/config'
import { FileMigrationProvider, Kysely, Migrator, SqliteDialect } from 'kysely'
import { promises as fs } from 'node:fs'
import * as path from 'node:path'
import type { DB } from '~/types/db.js'

const dialect = new SqliteDialect({
  database: new SQLite(process.env.NUXT_DATABASE_URL),
})

export const db = new Kysely<DB>({
  dialect,
})

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(import.meta.dirname, 'migrations'),
  }),
})

async function migrate() {
  await migrator.migrateDown()
  const { error, results } = await migrator.migrateToLatest()

  results?.forEach((it) => {
    if (it.status === 'Success')
      console.log(`migration "${it.migrationName}" was executed successfully`)
    else if (it.status === 'Error')
      console.error(`failed to execute migration "${it.migrationName}"`)
    else console.log('--- ~ results?.forEach ~ it.status:', it.status)
  })

  if (error) {
    console.error('failed to migrate')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

migrate()
