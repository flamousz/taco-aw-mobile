const express = require('express')
const {authentication} = require('../middlewares/auth')
const categoryRouter = require('./category')
const ingredientRouter = require('./ingredient')
const itemRouter = require('./item')
const router = express.Router()

router.use('/items', itemRouter)
router.use('/categories', categoryRouter)
router.use('/ingredients', ingredientRouter)
// router.use(authentication)



module.exports = router