const express = require('express')
const CategoryController = require('../controllers/categoryController')
const categoryRouter = express.Router()

categoryRouter.get('/', CategoryController.getCategory)
categoryRouter.post('/form', CategoryController.postCategory)
categoryRouter.delete('/:id', CategoryController.deleteCategory)
categoryRouter.put('/:id', CategoryController.putCategory)



module.exports = categoryRouter
