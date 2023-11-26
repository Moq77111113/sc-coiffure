import { z } from 'zod';
import { createCommand } from '../../utils/createCommand';
import axios from 'axios';

// pnpm run cli api:auth:token
const schema = z.object({
  code: z.string(),
});

type Schema = z.infer<typeof schema>;
const { handler, describe, builder, command } = createCommand<Schema>(
  'api:auth:token',
  {
    describe: 'Generate a short token using the api',

    handler: async ({ code }) => {
      const apiSecret = process.env.API_SECRET;
      const apiUrl = process.env.API_URL;
      if (!apiSecret || !apiUrl) {
        throw new Error(
          'API_SECRET or API_URL not found, please add it to your .env file'
        );
      }
      try {
        const url = new URL('api/auth/instagram/token/short', apiUrl);

        const response = await axios.post<{ access_token: string }>(
          url.toString(),
          { code },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiSecret}`,
            },
          }
        );

        console.log(response.data);
      } catch (e) {
        axios.isAxiosError(e)
          ? console.log(e.response?.data)
          : console.log('Error');
      }
    },
  }
);

export { handler, describe, builder, command };
