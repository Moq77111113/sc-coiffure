import z from 'zod';
const tokenSchema = z.object({
  access_token: z.string(),
  user_id: z.string(),
});

export type IGTokenResponse = z.infer<typeof tokenSchema>;

const longTokenSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number(),
});

export type IGLongTokenResponse = z.infer<typeof longTokenSchema>;
