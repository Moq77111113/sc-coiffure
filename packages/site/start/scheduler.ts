import scheduler from 'adonisjs-scheduler/services/main'

import IgRefreshToken from '../commands/ig_refresh_token.js'

scheduler.command(IgRefreshToken).cron('0 0 * * *')
