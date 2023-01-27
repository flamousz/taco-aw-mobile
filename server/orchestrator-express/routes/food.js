const express = require('express')
const FoodController = require('../controllers/foodController')
const foodRouter = express.Router()

foodRouter.get('/', FoodController.getFoods)
foodRouter.post('/', FoodController.postFood)
foodRouter.get('/:id', FoodController.getFoodById)


module.exports = foodRouter


