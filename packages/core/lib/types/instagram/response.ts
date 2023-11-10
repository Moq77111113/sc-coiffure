import z from 'zod';
const tokenSchema = z.object({
  access_token: z.string(),
  user_id: z.string(),
});

export type IGTokenResponse = z.infer<typeof tokenSchema>;
