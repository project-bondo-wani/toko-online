const express = require('express')
const router = express.Router()
const Customer = require('../controllers/customer')

router.get('/register',Customer.register)
router.post('/register',Customer.create)
router.get('/login', Customer.login)
router.post('/login', Customer.loginCheck)

module.exports = router