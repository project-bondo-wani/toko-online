const router = require('express').Router()
const controller = require('../controllers/controller_admin.js')

// router.get('/', (req, res, next)=>{
//     res.send('hi')
// })
router.get('/', (req, res, next)=>{
    const {isLogin} = req.session
    if(isLogin){
        next()
    }else{
        res.redirect('/admin/login')
    }
}, controller.home)
// router.get('/home', controller.home)
router.get('/register', controller.createForm)
router.post('/register', controller.create)
router.get('/login', controller.loginForm)
router.post('/login', controller.login)
router.get('/update/:id', controller.updateForm)
router.post('/update/:id', controller.update)
router.get('/delete/:id', controller.delete)

module.exports = router