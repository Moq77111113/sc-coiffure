import { z } from 'zod';
import { createCommand } from '../../utils/createCommand';
import { IGAuthService } from '@sc-coiffure/core/lib/services/instagram/auth';
import { msToText } from '@sc-coiffure/core/lib/utils';
// pnpm run cli ig:auth:token
const schema = z.object({
  code: z.string(),
});

type Schema = z.infer<typeof schema>;
const { handler, describe, builder, command } = createCommand<Schema>(
  'ig:auth:long-token',
  {
    describe: 'Generate a long lived token',

    handler: async ({ code }) => {
      const clientId = process.env.IG_CLIENT_ID;

      const clientSecret = process.env.IG_CLIENT_SECRET;
      if (!clientId || !clientSecret) {
        throw new Error('IG_CLIENT_ID or IG_CLIENT_SECRET is not set');
      }
      try {
        const apiResponse = await IGAuthService.getLongToken({
          apiPath: 'access_token',
          apiUrl: 'graph.instagram.com',
          clientSecret,
          code,
        });
        console.log(
          'Token: ',
          apiResponse.data.access_token,
          'will expire in',
          msToText(apiResponse.data.expires_in * 1000)
        );
      } catch (e) {
        console.log(e);
      }
    },
  }
);

export { handler, describe, builder, command };
