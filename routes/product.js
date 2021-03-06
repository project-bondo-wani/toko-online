const router = require('express').Router()
const controller = require('../controllers/controller_product.js')
const upload = require('../helper/multer.js')

router.get('/', controller.getAllCustomer)
router.get('/productData', controller.getAll)
router.get('/create', controller.createForm)
router.post('/create', upload.single('image'), controller.create)
router.get('/update/:id', controller.updateForm)
router.post('/update/:id', controller.update)
router.get('/delete/:id', controller.delete)

module.exports = router