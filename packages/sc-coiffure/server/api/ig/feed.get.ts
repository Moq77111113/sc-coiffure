import { db } from '~/db/kysely'

export default defineEventHandler(async () => {
  const feed = await db.selectFrom('feed').selectAll().execute()

  const data = {
    toJSON: () => feed,
  }
  return data
})
