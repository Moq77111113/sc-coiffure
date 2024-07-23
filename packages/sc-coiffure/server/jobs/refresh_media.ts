import { db } from '~/db/kysely';
import { Media } from '~/types/ig';
import { ResultWithRecoverableError } from '~/types/utils';
import { defineCronHandler } from '#nuxt/cron';

const retrieveToken = async (): Promise<ResultWithRecoverableError<string>> => {
  const row = await db
    .selectFrom('tokens')
    .select('token')
    .where('name', '=', 'INSTAGRAM')
    .executeTakeFirst();

  if (!row) {
    return [null, new Error('No Instagram token found')];
  }
  return [row.token, null];
};

const buildUrl = (
  base: string,
  token: string,
  processCount?: number
): string => {
  const url = new URL(base);
  const params = new URLSearchParams({
    fields: [
      'id',
      'caption',
      'media_type',
      'media_url',
      'thumbnail_url',
      'timestamp',
      'username',
      'permalink',
    ].join(','),
    access_token: token,
  });
  if (processCount) {
    params.set('limit', processCount.toString());
  }
  url.search = params.toString();
  return url.toString();
};

const fetchMedia = async (url: string) => {
  try {
    const res = await $fetch<Media>(url, { method: 'GET' });
    const { data, paging } = res;
    return { data, next: paging?.next };
  } catch (err) {
    return {
      data: [],
      error: err instanceof Error ? err : new Error('Unable to fetch media'),
    };
  }
};

const mediaGetAll = async (
  pack = 5,
  fetchNext = true
): Promise<ResultWithRecoverableError<Media['data']>> => {
  const { igGraphUrl } = useRuntimeConfig();
  const [token, error] = await retrieveToken();
  if (error) {
    throw error;
  }

  let url: string | undefined = buildUrl(`${igGraphUrl}/me/media`, token, pack);

  const media: Media['data'] = [];

  do {
    const { data, next, error } = await fetchMedia(url);
    if (error) {
      return [null, error];
    }
    media.push(...data);
    url = next;
  } while (url && fetchNext);

  return [media, null];
};

const extractAndSaveMedia = async (picture: Media['data'][number]) => {
  const asUrl = new URL(picture.media_url);
  const oe = asUrl.searchParams.get('oe');
  if (!oe) {
    console.error(
      `Could not find the outlink expiration time for ${picture.id}`
    );
    return;
  }

  const { caption, media_type, media_url, permalink, timestamp } = picture;

  const expiration = parseInt(oe, 16) * 1000;
  const now = Date.now().toString();
  await db
    .insertInto('feed')
    .values({
      caption,
      media_type,
      media_url,
      permalink,
      expires_at: expiration.toString(),
      external_id: picture.id,
      media_date: new Date(timestamp).getTime().toString(),
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
        updated_at: Date.now().toString(),
      }))
    )
    .executeTakeFirst();
};
export default defineCronHandler(
  () => '*/30 * * * *',
  async () => {
    console.info("Starting 'refresh_media' job");
    const [pics, error] = await mediaGetAll(5);
    if (error) {
      console.error(error.message);
      return;
    }

    for (const pic of pics) {
      await extractAndSaveMedia(pic);
    }
    console.info("Finished 'refresh_media' job");
  }
);
