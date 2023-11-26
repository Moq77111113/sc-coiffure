import * as z from 'zod';
import type { Posts } from './instagram/post';
import type { Reviews } from './google/review';
import type { Auth } from './instagram/auth';

export const dataSchema = z.object({
  reviews: z.string(),
  posts: z.string(),
  igAuth: z.string(),
});

export type DataTypes = {
  reviews: Reviews;
  posts: Posts;
  igAuth: Auth;
};
export type Data = z.infer<typeof dataSchema>;
