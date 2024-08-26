import { db } from '~/db/kysely'
import handlebars from 'handlebars'
import { Resend } from 'resend'
import { location } from '~/constants/location'
import { social } from '~/constants/social'

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

const compileTemplate = async (subject: string, message: string) => {
  const file = await useStorage('assets:templates').getItem('mails:default.hbs')

  if (!file) {
    throw new Error('Template not found')
  }

  const template = handlebars.compile(file)

  return template({
    title: subject,
    content: message,
    street: location.address.street,
    city: location.address.city,
    zip: location.address.zip,
    phone: social.phone,
    instagram: social.instagram,
    facebook: social.facebook,
    email: social.email,
  }, {
    
  })
}

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

    console.log(message)

    const html = await compileTemplate(`${contact} a laissé un message`, `${message}`)

    const { error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'quentin.moessner@gmail.com',
      subject: 'Nouveau message depuis https://sccoiffure83.fr',
      html: html,
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
