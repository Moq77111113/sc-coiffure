import { db } from '~/db/kysely';
import auth from '~/server/utils/auth';

export default defineEventHandler({
  onRequest: [auth],
  handler: async (event) => {
    const key = getRouterParam(event, 'key');
    if (!key) {
      throw createError({
        status: 400,
        statusMessage: 'Bad Request',
        stack: undefined,
      });
    }
    const token = await db
      .selectFrom('rolling_token')
      .select('value')
      .where('key', '=', key)
      .executeTakeFirstOrThrow();

    const data = {
      toJSON: () => token,
    };
    return data;
  },
});
