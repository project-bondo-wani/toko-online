const router = require('express').Router()
const admin = require('./admin.js')

const customer = require('./customer')

router.use('/customer', customer)

const controller_admin = require('../controllers/controller_admin.js')
//untuk login admin
router.get('/admin/login', controller_admin.loginForm)
router.post('/admin/login', controller_admin.login)
router.get('/admin/register', controller_admin.createForm)
router.post('/admin/register', controller_admin.create)
router.use('/admin',(req, res, next)=>{
    const {isLogin} = req.session
    console.log(req.session)
    if(isLogin){
        next()
    }else{
        res.redirect('/admin/login')
    }
}, admin)


module.exports = router
