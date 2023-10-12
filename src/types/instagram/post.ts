import { z } from "zod";

export const postSchema = z.object({
  id: z.string(),
  media_url: z.string(),
  username: z.string(),
  caption: z.string(),
  permalink: z.string(),
});

export type Post = z.infer<typeof postSchema>;

export const postsSchema = z.array(postSchema);
export type Posts = z.infer<typeof postsSchema>;
