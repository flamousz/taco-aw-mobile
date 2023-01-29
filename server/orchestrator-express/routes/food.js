const express = require('express')
const FoodController = require('../controllers/foodController')
const foodRouter = express.Router()

foodRouter.get('/', FoodController.getFoods)
foodRouter.post('/', FoodController.postFood)
foodRouter.get('/:id', FoodController.getFoodById)
foodRouter.put('/:id', FoodController.putFood)
foodRouter.delete('/:id', FoodController.deleteFood)


module.exports = foodRouter


