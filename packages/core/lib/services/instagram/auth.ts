import { z } from 'zod';
import axios from 'axios';
import { IGTokenResponse } from '../../types/instagram';
const baseSchema = z.object({
  apiUrl: z.string().url(),
  apiPath: z.string(),
  clientId: z.string(),
  redirectUrl: z.string().url(),
});

type AuthArgs = z.infer<typeof baseSchema>;

const shortTokenSchema = baseSchema.merge(
  z.object({
    clientSecret: z.string(),
    code: z.string(),
  })
);

type ShortTokenArgs = z.infer<typeof shortTokenSchema>;

const IGAuthService = {
  buildAuthorizationUrl: (args: AuthArgs) => {
    const { apiUrl, apiPath, clientId, redirectUrl } = args;
    const url = new URL(apiPath, `https://${apiUrl}`);
    url.search = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUrl,
      scope: 'user_profile,user_media',
      response_type: 'code',
    }).toString();

    return url.toString();
  },
  getShortToken: async (args: ShortTokenArgs) => {
    const { apiUrl, apiPath, clientId, clientSecret, redirectUrl, code } = args;
    const url = new URL(apiPath, `https://${apiUrl}`);
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', redirectUrl);
    params.append('code', code);

    return axios.post<IGTokenResponse>(url.toString(), params);
  },
};

export { IGAuthService };
