const db = require("../db/connection");

exports.fetchUsers = () => {
  return db.query(`SELECT * FROM users`).then((results) => {
    return results.rows;
  });
};

exports.fetUserByUsername = (username) => {
  return db.query(`SELECT * FROM users
  WHERE username = $1`, [username]).then((results) => {
    if (!results.rows.length) {
      return Promise.reject({ status: 404, msg: "Not found" });
    }
    return results.rows[0]
  })
}
