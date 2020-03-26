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
<<<<<<< HEAD
=======
router.get('/:id/customer', controller.getAllCustomer)
>>>>>>> db7e2efd844f593e7360b8e06c1d77ecef108d11

module.exports = router