import { z } from 'zod';
import { createCommand } from '../../utils/createCommand';
import { buildAuthorizationUrl } from '@sc-coiffure/core/lib/services/instagram/auth';
// pnpm run cli ig;auth:url
const schema = z.object({});

type Schema = z.infer<typeof schema>;
const { handler, describe, builder, command } = createCommand<Schema>(
  'ig:auth:url',
  {
    describe: 'Get IG auth code',

    handler: async ({}) => {
      const clientId = process.env.IG_CLIENT_ID;
      const redirectUrl = process.env.IG_REDIRECT_URL;
      if (!clientId || !redirectUrl) {
        throw new Error('IG_CLIENT_ID or IG_REDIRECT_URL is not set');
      }
      const url = buildAuthorizationUrl({
        apiPath: 'oauth/authorize',
        apiUrl: 'api.instagram.com',
        clientId,
        redirectUrl,
      });

      console.info(`Authorization URL: ${url}`);
    },
  }
);

export { handler, describe, builder, command };
