import scheduler from 'adonisjs-scheduler/services/main'

import IgFetchMedia from '#commands/ig_fetch_media'
import IgRefreshToken from '#commands/ig_refresh_token'

scheduler.command(IgRefreshToken).cron('0 0 * * 0')
scheduler.command(IgFetchMedia).cron('*/30 * * * *')
