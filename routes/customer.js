const express = require('express')
const router = express.Router()
// const Customer = require('../controllers/customer')
const product =  require('../routes/product')

router.use('/product', product)

module.exports = router