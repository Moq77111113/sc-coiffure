import { defineCronHandler } from '#nuxt/cron';
import { db } from '~/db/kysely';
import type { Token } from '~/types/ig';
export default defineCronHandler(
  () => '0 0 * * 0',
  async () => {
    console.info(" Starting cron job 'refresh_ig_token'");
    const row = await db
      .selectFrom('tokens')
      .select('token')
      .where('name', '=', 'INSTAGRAM')
      .executeTakeFirst();

    if (!row) {
      throw new Error('No Instagram token found');
    }

    const { igGraphUrl } = useRuntimeConfig();

    const url = new URL(`${igGraphUrl}/refresh_access_token`);
    url.search = new URLSearchParams({
      grant_type: 'ig_refresh_token',
      access_token: row.token,
    }).toString();

    try {
      const { access_token, expires_in } = await $fetch<Token['Refresh']>(
        url.toString(),
        {
          method: 'GET',
        }
      );

      const now = Date.now().toString();
      await db
        .insertInto('tokens')
        .values({
          name: 'INSTAGRAM',
          token: access_token,
          created_at: now,
          updated_at: now,
          expires_at: expires_in.toString(),
        })
        .onConflict((oc) =>
          oc.column('name').doUpdateSet((eb) => ({
            token: eb.ref('excluded.token'),
            updated_at: now,
            expires_at: expires_in.toString(),
          }))
        )
        .execute();
      console.info("Cron job 'refresh_ig_token' completed");
    } catch {
      console.warn('Refresh token failed');
      throw new Error('Refresh token failed');
    }
  },
  { runOnInit: false }
);
