const apiRouter = require('express').Router();
const userRouter = require('./user_routers');
const reviewRouter = require('./review_routers')
const categoriesRouter = require('./categories_routers');
const commentRouter = require('./comment_routers')
const { getEndpoints } = require("../controllers/util_controllers");

apiRouter.get("/", getEndpoints)
apiRouter.use('/users', userRouter)
apiRouter.use('/reviews', reviewRouter)
apiRouter.use('/categories', categoriesRouter)
apiRouter.use('/comments', commentRouter)


module.exports = apiRouter;