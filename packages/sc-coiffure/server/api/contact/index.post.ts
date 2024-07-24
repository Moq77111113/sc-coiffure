import { db } from '~/db/kysely';

const authUsingContactKey = defineEventHandler(async (event) => {
  const headers = getHeaders(event);

  const token = headers.authorization?.replace('Bearer ', '');

  if (!token) {
    throw createError({
      status: 401,
      statusMessage: 'Unauthorized',
      stack: undefined,
    });
  }

  const isTokenValid = await db
    .selectFrom('rolling_token')
    .where('rolling_token.key', '=', 'contact_token')
    .where('rolling_token.value', '=', token)
    .where('rolling_token.expires_at', '>=', Date.now())
    .select((eb) => eb.fn.countAll<number>().as('count'))
    .executeTakeFirst();

  if (!isTokenValid?.count) {
    throw createError({
      status: 401,
      statusMessage: 'Unauthorized',
      stack: undefined,
    });
  }
});

export default defineEventHandler({
  onRequest: [authUsingContactKey],
  handler: async (event) => {
    const form = await readFormData(event);
    const honeyPot = form.get('honey');
    const contact = form.get('contact');
    const message = form.get('message');
    if (honeyPot || !contact || !message) {
      return {
        status: 400,
      };
    }

    console.log({ contact, message });
  },
});
