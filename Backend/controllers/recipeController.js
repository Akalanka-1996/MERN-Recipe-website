const { response } = require('express')
const asyncHandler = require('express-async-handler')
const Recipe = require('../models/recipeModel')

// get all recipes

const getRecipes = asyncHandler(async (req, res) => {
    const recipes = await Recipe.find()
    if(recipes) {
        res.json(recipes)
    }
})

// get recipe by ID

const getRecipeById = asyncHandler(async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)

    if(recipe) {
        res.json(recipe)
    } else {
        res.status(404)
        throw new Error("Recipe not found!")
    }
})

// create recipe

const createRecipe = asyncHandler(async (req, res) => {

const {name, ingredients, description} = req.body

if(!name || !ingredients || !description) {
    res.status(400)
    throw new Error("Please fill all the fields")
} else {
    const recipe = new Recipe({
        name, ingredients, description
    })

    const createdRecipe = await recipe.save()

    res.status(201).json(createdRecipe)
}

})

// update a recipe

const updateRecipe = asyncHandler(async (req, res) => {

    const {name, ingredients, description} = req.body

    const recipe = await Recipe.findById(req.params.id)

    if(recipe) {
        recipe.name = name
        recipe.ingredients = ingredients
        recipe.description = description

        const updatedRecipe = await recipe.save()
        res.json(updatedRecipe)

    } else {
        res.status(404)
        throw new Error("Recipe not found!")
    }

})

// delete a recipe

const deleteRecipe = asyncHandler(async (req, res) => {

    const recipe = await Recipe.findById(req.params.id)

    if(recipe) {
        await recipe.remove()
        res.json("Recipe removed")
    } else {
        res.status(404)
        throw new Error("Recipe not found")
    }
})

module.exports = {getRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe}