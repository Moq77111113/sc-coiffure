import { db } from '~/db/kysely'

import { Resend } from 'resend'

const resend = (() => {
  const { resendApiSecret } = useRuntimeConfig()

  return new Resend(resendApiSecret)
})()

const authUsingContactKey = defineEventHandler(async (event) => {
  const headers = getHeaders(event)

  const token = headers.authorization?.replace('Bearer ', '')

  if (!token) {
    throw createError({
      status: 401,
      statusMessage: 'Unauthorized',
      stack: undefined,
    })
  }

  const isTokenValid = await db
    .selectFrom('rolling_token')
    .where('rolling_token.key', '=', 'contact_token')
    .where('rolling_token.value', '=', token)
    .where('rolling_token.expires_at', '>=', Date.now())
    .select((eb) => eb.fn.countAll<number>().as('count'))
    .executeTakeFirst()

  if (!isTokenValid?.count) {
    throw createError({
      status: 401,
      statusMessage: 'Unauthorized',
      stack: undefined,
    })
  }
})

export default defineEventHandler({
  onRequest: [authUsingContactKey],
  handler: async (event) => {
    const form = await readFormData(event)
    const honeyPot = form.get('honey')
    const contact = form.get('contact')
    const message = form.get('message')
    if (honeyPot || !contact || !message) {
      return {
        status: 400,
      }
    }

    const { error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'quentin.moessner@gmail.com',
      subject: 'Nouveau message depuis https://sccoiffure83.fr',
      html: `<p><strong>${contact}</strong> a laissé le message suivant</p><p>${message}</p>`,
    })

    if (error) {
      console.error('Error sending email', error)
      throw createError({
        status: 500,
      })
    }
    return
  },
})
