const { fetchUsers, fetUserByUsername } = require("../models/user_model");

exports.getUsers = (req, res, next) => {
  fetchUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getUserByUsername = (req, res, next) => {
  const { username } = req.params;
  fetUserByUsername(username)
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch((err) => {
      next(err);
    });
};
