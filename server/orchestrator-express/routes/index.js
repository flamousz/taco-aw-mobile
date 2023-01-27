const express = require('express')
const foodRouter = require('./food')
const router = express.Router()

router.use('/foods', foodRouter)


module.exports = router