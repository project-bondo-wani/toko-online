const router = require('express').Router()
const admin = require('./admin.js')

const customer = require('../controllers/customer')
router.get('/customer/register',customer.register)
router.post('/customer/register',customer.create)
router.get('/customer/login', customer.login)
router.post('/customer/login', customer.loginCheck)
router.use('/customer', (req, res, next) => {
    const {isLogin} = req.session
    if(isLogin){
        next()
    } else {
        res.redirect('/customer/login')
    }
})

const controller_admin = require('../controllers/controller_admin.js')

//untuk login admin
router.get('/admin/login', controller_admin.loginForm)
router.post('/admin/login', controller_admin.login)
router.use('/admin',(req, res, next)=>{
    const {isLogin} = req.session
    if(isLogin){
        next()
    }else{
        res.redirect('/admin/login')
    }
}, admin)


module.exports = router
