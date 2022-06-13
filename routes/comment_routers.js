const commentRouter = require("express").Router();
const {
  deleteCommentById,
  patchCommentVotes,
} = require("../controllers/comment_controllers");

commentRouter
  .route("/:comment_id")
  .delete(deleteCommentById)
  .patch(patchCommentVotes);

module.exports = commentRouter;
