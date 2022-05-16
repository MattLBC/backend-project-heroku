const db = require("../db/connection");

exports.fetchCategories = () => {
  return db.query(`SELECT * FROM categories`).then((results) => {
    return results.rows;
  });
};

exports.fetchReviewById = (review_id) => {
  return db
    .query(
      `SELECT * FROM reviews
    WHERE review_id = $1`,
      [review_id]
    )
    .then((results) => {
      if (!results.rows.length) {
        return Promise.reject({ status: 404, msg: "Not found" });
      }
      return results.rows[0];
    });
};

exports.updateReviews = (review_id, inc_votes) => {
  return db
    .query(
      `UPDATE reviews
    SET votes = votes + $2
    WHERE review_id = $1
    RETURNING *`,
      [review_id, inc_votes]
    )
    .then((results) => {
      if (!results.rows.length) {
        return Promise.reject({ status: 404, msg: "Not found" });
      }
      return results.rows[0];
    });
};
