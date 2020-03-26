const router = require('express').Router()
const category = require('./category.js')
const controller = require('../controllers/controller_admin.js')

router.get('/', controller.home)
router.get('/logout', controller.logout)
router.get('/register', controller.createForm)
router.post('/register', controller.create)
router.get('/update/:id', controller.updateForm)
router.post('/update/:id', controller.update)
router.get('/delete/:id', controller.delete)

router.use('/category', category)

module.exports = router