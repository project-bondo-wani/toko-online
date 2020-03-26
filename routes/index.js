const router = require('express').Router()
const admin = require('./admin.js')
const customer = require('./customer')

router.use('/admin', admin)
router.use('/customer', customer)

module.exports = router
