const express = require('express')
const UserController = require('../controllers/userController')
const userRouter = express.Router()



userRouter.get('/', UserController.getUsers)
userRouter.post('/', UserController.postUser)
userRouter.get('/:id', UserController.getUserById)



module.exports = userRouter