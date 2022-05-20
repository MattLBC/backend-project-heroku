const userRouter = require('express').Router();
const { getUsers } = require("../controllers/user_controllers");

userRouter.route('/').get(getUsers)

module.exports = userRouter;
