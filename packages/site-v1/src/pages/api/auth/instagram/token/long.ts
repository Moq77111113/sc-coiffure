import { IGAuthService, crypto } from '@sc-coiffure/core/lib/services';
import { handleAxiosError } from '@sc-coiffure/core/lib/utils';
import type { APIRoute } from 'astro';
import { isAxiosError } from 'axios';
import * as z from 'zod';
import { verifyAuth } from '~/services/auth';
import { updateData } from '~/services/data/update';
export const prerender = false;

const schema = z.object({
  code: z.string(),
});
export const POST = (async ({ request }) => {
  verifyAuth({ request, apiSecret: import.meta.env.SECRET });

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
    const apiResponse = await IGAuthService.getLongToken({
      apiPath: 'access_token',
      apiUrl: 'graph.instagram.com',
      clientSecret: import.meta.env.IG_CLIENT_SECRET,
      code,
    });

    const token = apiResponse.data.access_token;
    await updateData(
      'igLongToken',
      crypto.encrypt(token, import.meta.env.SECRET)
    );
    return token;
  } catch (e) {
    if (isAxiosError(e)) {
      const { status, message } = handleAxiosError(e);
      throw new Response(message, { status });
    }

    console.error(e);
    throw new Response('An error occurred while generating long token', {
      status: 500,
    });
  }
};
