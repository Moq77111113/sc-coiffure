import type { APIRoute } from 'astro';
import { IGAuthService, crypto } from '@sc-coiffure/core/lib/services';
import { handleAxiosError } from '@sc-coiffure/core/lib/utils';
import { updateData } from '~/services/data/update';
import { isAxiosError } from 'axios';
import { verifyAuth } from '~/services/auth';
import * as z from 'zod';
export const prerender = false;

const schema = z.object({
  code: z.string(),
});

export const POST = (async ({ request }) => {
  verifyAuth({ request, apiSecret: import.meta.env.SECRET });
  // May have to check the code from data inside the server instead of body
  const body = schema.safeParse(await request.json());
  if (!body.success) {
    return new Response('Invalid, required code but not found', {
      status: 400,
    });
  }

  try {
    const access_token = await handleCode(body.data.code);
    return new Response(JSON.stringify({ access_token }), {
      status: 200,
    });
  } catch (e) {
    // TODO Mail or smth
    console.error(e);

    if (e instanceof Response) {
      return e;
    }

    return new Response('Internal Server Error', { status: 500 });
  }
}) satisfies APIRoute;

const handleCode = async (code: string) => {
  try {
    const apiResponse = await IGAuthService.getShortToken({
      apiPath: 'oauth/access_token',
      apiUrl: 'api.instagram.com',
      clientId: import.meta.env.IG_CLIENT_ID,
      redirectUrl: import.meta.env.IG_REDIRECT_URL,
      clientSecret: import.meta.env.IG_CLIENT_SECRET,
      code,
    });

    const token = apiResponse.data.access_token;
    await updateData('igToken', crypto.encrypt(token, import.meta.env.SECRET));
    return token;
  } catch (e) {
    if (isAxiosError(e)) {
      const { status, message } = handleAxiosError(e);
      throw new Response(message, { status });
    }
    throw new Response('An error occurred while generating the token', {
      status: 500,
    });
  }
};
