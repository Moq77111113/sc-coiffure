import * as z from 'zod';
import type Reviews from '~/components/atoms/Review.svelte';
import type { Posts } from './instagram/post';

export const dataSchema = z.object({
  reviews: z.string(),
  posts: z.string(),
  igAuth: z.string(),
});

export type DataTypes = {
  reviews: Reviews;
  posts: Posts;
  igAuth: string;
};
export type Data = z.infer<typeof dataSchema>;
