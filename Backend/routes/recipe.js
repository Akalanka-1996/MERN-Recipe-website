const router = require('express').Router()
const {getRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe} = require('../controllers/recipeController')

router.route('/').get(getRecipes)
router.route('/create').post(createRecipe)
router.route('/:id').get(getRecipeById).put(updateRecipe).delete(deleteRecipe)

module.exports = router
