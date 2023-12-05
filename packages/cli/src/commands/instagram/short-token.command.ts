import { z } from 'zod';
import { createCommand } from '../../utils/createCommand';
import { IGAuthService } from '@sc-coiffure/core/lib/services/instagram/auth';
// pnpm run cli ig:auth:token
const schema = z.object({
  code: z.string(),
});

type Schema = z.infer<typeof schema>;
const { handler, describe, builder, command } = createCommand<Schema>(
  'ig:auth:token',
  {
    describe: 'Generate a short token',

    handler: async ({ code }) => {
      const clientId = process.env.IG_CLIENT_ID;
      const redirectUrl = process.env.IG_REDIRECT_URL;
      const clientSecret = process.env.IG_CLIENT_SECRET;
      if (!clientId || !redirectUrl || !clientSecret) {
        throw new Error(
          'IG_CLIENT_ID or IG_REDIRECT_URL or IG_CLIENT_SECRET is not set'
        );
      }
      try {
        const apiResponse = await IGAuthService.getShortToken({
          apiPath: 'oauth/access_token',
          apiUrl: 'api.instagram.com',
          clientId,
          redirectUrl,
          clientSecret,
          code,
        });
        console.log('Token: ', apiResponse.data.access_token);
      } catch (e) {
        console.log(e);
      }
    },
  }
);

export { handler, describe, builder, command };
