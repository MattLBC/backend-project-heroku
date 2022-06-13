const reviewRouter = require("express").Router();
const {
  getReviewById,
  patchReviews,
  getAllReviews,
  postReview,
} = require("../controllers/review_controllers");
const {
  getCommentsByReviewId,
  postCommentByReviewId,
} = require("../controllers/comment_controllers");

reviewRouter.route("/").get(getAllReviews).post(postReview);

reviewRouter.route("/:review_id").get(getReviewById).patch(patchReviews);
reviewRouter
  .route("/:review_id/comments")
  .get(getCommentsByReviewId)
  .post(postCommentByReviewId);

module.exports = reviewRouter;
