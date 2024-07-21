import { defineCronHandler } from '#nuxt/cron'
import { db } from '~/db/kysely'
export default defineCronHandler(
  () => '* * * * *',
  async () => {
    const data = await db.selectFrom('feed').selectAll().execute()
    console.log(JSON.stringify(data))
  },
)
