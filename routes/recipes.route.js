const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe.controller");
const flatCacheMiddleware = require("../middleware/cache");

router.get("/", flatCacheMiddleware, recipeController.getAll);

module.exports = router;
