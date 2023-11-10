import type { APIRoute } from 'astro';
import { crypto } from '@sc-coiffure/core/lib/services';
import { updateData } from '~/services/data/update';
export const prerender = false;

export const GET = (async ({ request, redirect }) => {
  const code = new URL(request.url).searchParams.get('code');
  await handleCode(code);

  return redirect('/', 302);
}) satisfies APIRoute;

const handleCode = async (code: string | null) => {
  if (!code) {
    // TODO Mail or smth
    return;
  }

  await updateData('igAuth', crypto.encrypt(code, import.meta.env.SECRET));
};
