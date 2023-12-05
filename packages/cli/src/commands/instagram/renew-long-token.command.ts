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
  'ig:auth:renew-token',
  {
    describe: 'Renew a long lived token',

    handler: async ({ code }) => {
      try {
        const apiResponse = await IGAuthService.renewLongToken({
          apiPath: 'refresh_access_token',
          apiUrl: 'graph.instagram.com',
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
