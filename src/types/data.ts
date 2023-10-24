import { z } from 'zod';

export const dataSchema = z.object({
  reviews: z.string(),
  posts: z.string(),
});

export type Data = z.infer<typeof dataSchema>;
