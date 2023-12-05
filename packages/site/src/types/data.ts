import * as z from 'zod';
import type { Posts } from './instagram/post';
import type { Reviews } from './google/review';
import type { IgCode, IgToken } from './instagram/auth';

export const dataSchema = z.object({
  reviews: z.string(),
  posts: z.string(),
  igToken: z.string(),
  igCode: z.string().optional(),
});

export type Data = z.infer<typeof dataSchema>;

export type DataTypes = {
  reviews: Reviews;
  posts: Posts;
  igToken: IgToken;
  igCode: IgCode;
};
