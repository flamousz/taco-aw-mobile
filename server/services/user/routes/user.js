const express = require('express')
const userController = require('../controllers/userController')
const userRouter = express.Router()

userRouter.get('/', userController.getUser)
userRouter.post('/', userController.postUser)
userRouter.get('/:id', userController.getById)
userRouter.delete('/:id', userController.deleteById)


module.exports = userRouter