import { db } from '#core/services/db';
import { Feed } from '#types/db';

type FeedCreateProps = Omit<Feed, 'id' | 'created_at' | 'updated_at'>;

export default class FeedRepository {
  public async addOrUpdate(feed: FeedCreateProps) {
    const now = Date.now().toString();

    return await db
      .insertInto('feed')
      .values({
        ...feed,
        created_at: now,
        updated_at: now,
      })

      .onConflict((oc) =>
        oc.column('external_id').doUpdateSet((eb) => ({
          caption: eb.ref('excluded.caption'),
          expires_at: eb.ref('excluded.expires_at'),
          media_date: eb.ref('excluded.media_date'),
          media_type: eb.ref('excluded.media_type'),
          media_url: eb.ref('excluded.media_url'),
          permalink: eb.ref('excluded.permalink'),
          updated_at: now,
        }))
      )
      .executeTakeFirst();
  }

  public async feed(limit = 16) {
    return await db
      .selectFrom('feed')
      .selectAll()
      .orderBy('media_date', 'desc')
      .limit(limit)
      .execute();
  }
}
