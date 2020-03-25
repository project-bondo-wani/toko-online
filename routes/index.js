const router = require('express').Router()
const admin = require('./admin.js')

router.use('/admin', admin)

module.exports = router
