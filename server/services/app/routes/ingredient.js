const express = require('express')
const IngredientController = require('../controllers/ingredientController')
const ingredientRouter = express.Router()


ingredientRouter.get('/', IngredientController.getIngredient)
ingredientRouter.get('/:id', IngredientController.getIngredientByItem)



module.exports = ingredientRouter