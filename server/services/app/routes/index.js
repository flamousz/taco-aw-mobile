const express = require('express')
const categoryRouter = require('./category')
const ingredientRouter = require('./ingredient')
const itemRouter = require('./item')
const router = express.Router()

router.use('/items', itemRouter)
router.use('/categories', categoryRouter)
router.use('/ingredients', ingredientRouter)



module.exports = router