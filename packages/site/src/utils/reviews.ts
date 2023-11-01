import type { Rating } from '~//types/google/review';

export const getRating = (v: Rating) =>
  ({
    STAR_RATING_UNSPECIFIED: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  }[v]);
