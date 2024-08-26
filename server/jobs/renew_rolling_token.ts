import { db } from '~/db/kysely'
import crypto from 'node:crypto'
import { defineCronHandler } from '#nuxt/cron'

const tokenToRenew = async () => {
  return await db
    .selectFrom('rolling_token')
    .select('rolling_token.key')
    .distinct()
    .where('expires_at', '<', Date.now() + 10 * 60 * 1000)
    .execute()
}

const createHash = async (key: string) => {
  const hash = crypto.createHash('sha256')
  hash.update(key)
  return hash.digest('hex')
}

const renewTokens = async (tokens: { key: string }[], expires_at: number) => {
  for (const { key } of tokens) {
    const hash = await createHash(key)
    await db.insertInto('rolling_token').values({ key, value: hash, expires_at }).execute()
  }
}

const deleteExpiredTokens = async () => {
  const { numDeletedRows } = await db
    .deleteFrom('rolling_token')
    .where('expires_at', '<', Date.now())
    .executeTakeFirst()
  return numDeletedRows
}

const main = async () => {
  const { tokenExpirationDurationMinutes } = useRuntimeConfig()
  const tokens = await tokenToRenew()
  const expires_at = Date.now() + tokenExpirationDurationMinutes * 60 * 1000

  await renewTokens(tokens, expires_at)
  const deleted = await deleteExpiredTokens()

  return deleted
}

export default defineCronHandler(
  () => '*/15 * * * *',
  async () => {
    console.info("Starting 'renew_rolling_token' job")
    try {
      const deleted = await main()
      console.info(`Deleted ${deleted} expired tokens`)
      console.info("Finished 'renew_rolling_token' job")
    } catch (err) {
      console.error(err)
      console.warn('Renew token failed')
    }
  },
  { runOnInit: true, timeZone: 'Europe/Paris' },
)
