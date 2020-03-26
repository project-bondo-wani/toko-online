const router = require('express').Router()
const controller = require('../controllers/controller_category.js')

router.get('/', controller.getAll)
router.get('/create', controller.createForm)
router.post('/create', controller.create)
router.get('/update/:id', controller.updateForm)
router.post('/update/:id', controller.update)
router.get('/delete/:id', controller.delete)

module.exports = router