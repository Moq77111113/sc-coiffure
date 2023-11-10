import { z } from 'zod';
import path from 'path';
const schema = z.object({
  apiUrl: z.string().url(),
  apiPath: z.string(),
  clientId: z.string(),
  redirectUrl: z.string().url(),
});

type Schema = z.infer<typeof schema>;
export const buildAuthorizationUrl = (args: Schema) => {
  const { apiUrl, apiPath, clientId, redirectUrl } = args;

  const url = path.join(apiUrl, apiPath);
  const params = [
    `client_id=${clientId}`,
    `redirect_uri=${redirectUrl}`,
    'scope=user_profile,user_media',
    'response_type=code',
  ].join('&');

  return `https://${url}?${params}`;
};
