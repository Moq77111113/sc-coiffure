import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler(() => '0 0 * * 0', async () => {
  console.log('This job runs every second')
})
