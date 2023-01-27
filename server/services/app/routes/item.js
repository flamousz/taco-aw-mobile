const express = require('express')
const ItemController = require('../controllers/itemController')
const itemRouter = express.Router()


itemRouter.get('/', ItemController.getItem)
itemRouter.post('/', ItemController.postItem)
itemRouter.get('/:id', ItemController.getDetailItem)
itemRouter.delete('/:id', ItemController.deleteItem)
itemRouter.put('/:id', ItemController.editItem)


module.exports = itemRouter