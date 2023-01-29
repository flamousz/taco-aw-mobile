const express = require('express')
const foodRouter = require('./food')
const userRouter = require('./user')
const router = express.Router()

router.use('/foods', foodRouter)
router.use('/users', userRouter)


module.exports = router