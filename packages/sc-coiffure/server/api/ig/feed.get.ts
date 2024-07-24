import { db } from '~/db/kysely';
import auth from '~/server/utils/auth';

export default defineEventHandler({
  onRequest: [auth],
  handler: async () => {
    const feed = await db.selectFrom('feed').selectAll().execute();

    const data = {
      toJSON: () => feed,
    };
    return data;
  },
});
