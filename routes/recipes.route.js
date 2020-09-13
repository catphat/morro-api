const express                = require('express');
const router                 = express.Router();
const recipeController       = require('../controllers/recipe.controller')

router.get('/recipes', recipeController.all)

module.exports = router;