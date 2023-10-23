import { getData } from "../data/get";

export const getReviews = async () => {
  try {
    const { reviews, averageRating, totalReviewCount } = await getData(
      "reviews"
    );
    const filteredReviews = reviews.filter(
      (review) => review.starRating == "FOUR" || review.starRating == "FIVE"
    );
    return { reviews: filteredReviews, averageRating, totalReviewCount };
  } catch (e) {
    console.log("Error fetching reviews", e);

    // TODO : send error by mail to admin
    return null;
  }
};

