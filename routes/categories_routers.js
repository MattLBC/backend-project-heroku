const categoriesRouter = require('express').Router();
const { getCategories } = require("../controllers/categories_controller");

categoriesRouter.route('/').get(getCategories)

module.exports = categoriesRouter