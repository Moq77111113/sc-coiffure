import { db } from '~/db/kysely';
import auth from '~/server/utils/auth';


export default defineEventHandler({
  onRequest: [auth],
  handler: async () => {
    const feed = await db.selectFrom('feed').selectAll().execute();
  
   const results = (await Promise.allSettled(feed.map(_ => $fetch(_.media_url)))).filter(_ => _.status === 'fulfilled')

   if(!results.length) {
    throw createError({status: 500})
   }
    const data = {
      toJSON: () => feed,
    };
    return data;
  
  },
});
