const router = require('express').Router()
const controller = require('../controllers/controller_order.js')

router.get('/', controller.getAll)
router.get('/:id/cart', controller.getByUserId)
router.get('/add', controller.add)
router.post('/add', controller.add)
router.get('/update/:id')
router.post('/update/:id')
router.get('/delete/:id')
router.get('/customer')

module.exports = router