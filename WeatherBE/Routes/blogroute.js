const express = require('express');
const blogController = require('../Controllers/BlogController');
const blogRouter = express.Router();
blogRouter.get('/read', blogController.readController);
module.exports = blogRouter;