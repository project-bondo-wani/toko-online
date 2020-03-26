const express = require('express')
const router = express.Router()
const product =  require('../routes/product')
const order = require('./order.js')

router.use('/product', product)
router.use('/order', order)

module.exports = router