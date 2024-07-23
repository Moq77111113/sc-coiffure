import { db } from '~/db/kysely';
import { Token } from '~/types/ig';
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (!query.code) {
    return { error: 'No code provided' };
  }
  const [short, shortError] = await getShortToken(query.code.toString());
  if (shortError) {
    return { error: 'Failed' };
  }
  const [long, longError] = await exchangeShortTokenForLongToken(
    short.access_token
  );

  if (longError) {
    return { error: 'Failed' };
  }
  await save(long.access_token, long.expires_in.toString());

  return { success: true };
});

const getShortToken = async (
  code: string
): Promise<[Token['Short'], null] | [null, Error]> => {
  const { igClientId, igClientSecret, igReturnUrl, igApiUrl } =
    useRuntimeConfig();
  const data = new FormData();
  data.set('client_id', igClientId);
  data.set('client_secret', igClientSecret);
  data.set('grant_type', 'authorization_code');
  data.set('redirect_uri', igReturnUrl);
  data.set('code', code);

  try {
    const res = await $fetch<Token['Short']>(`${igApiUrl}/oauth/access_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
    return [res, null];
  } catch {
    return [null, new Error('Failed to retrieve short token')];
  }
};

const exchangeShortTokenForLongToken = async (
  shortToken: string
): Promise<[Token['Long'], null] | [null, Error]> => {
  const { igClientSecret, igApiUrl } = useRuntimeConfig();
  const url = new URL(`${igApiUrl}/access_token`);
  url.search = new URLSearchParams({
    grant_type: 'ig_exchange_token',
    client_secret: igClientSecret,
    access_token: shortToken,
  }).toString();
  try {
    const res = await $fetch<Token['Long']>(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return [res, null];
  } catch {
    return [null, new Error('Failed to get long token')];
  }
};

const save = async (value: string, expires?: string) => {
  const now = Date.now().toString();
  return await db
    .insertInto('tokens')
    .values({
      name: 'INSTAGRAM',
      token: value,
      created_at: now,
      updated_at: now,
      expires_at: expires,
    })
    .onConflict((oc) =>
      oc.column('name').doUpdateSet((eb) => ({
        token: eb.ref('excluded.token'),
        updated_at: now,
        expires_at: expires,
      }))
    )
    .executeTakeFirst();
};
