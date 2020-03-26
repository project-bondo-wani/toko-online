const router = require('express').Router()
const admin = require('./admin.js')
<<<<<<< HEAD
const customer = require('./customer')

router.use('/admin', admin)
router.use('/customer', customer)
=======
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
>>>>>>> 3aafd68e6711da459d6f80aa94186f4e9c2554c0

module.exports = router
