import { z } from "zod";

const reviewerSchema = z.object({
  profilePhotoUrl: z.string(),
  displayName: z.string(),
  isAnonymous: z.boolean(),
});

export type Reviewer = z.infer<typeof reviewerSchema>;

const startRating = z.enum([
  "STAR_RATING_UNSPECIFIED",
  "ONE",
  "TWO",
  "THREE",
  "FOUR",
  "FIVE",
]);

const replySchema = z.object({
  comment: z.string(),
  updateTime: z.string(),
});

export const reviewSchema = z.object({
  name: z.string(),
  reviewId: z.string(),
  reviewer: reviewerSchema,
  starRating: startRating,
  comment: z.string(),
  createTime: z.string(),
  updateTime: z.string(),
  reviewReply: replySchema,
});

export const reviewsSchema = z.object({
  reviews: z.array(reviewSchema),
  averageRating: z.number(),
  totalReviewCount: z.number(),
  nextPageToken: z.string(),
});

export type Reviews = z.infer<typeof reviewsSchema>;
