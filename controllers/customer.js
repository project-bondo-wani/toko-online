const {Customers} = require('../models')

class CustomerController {
    static register(req, res) {
        res.render('registerCustomer')
    }
    static create (req, res) {
        const {first_name, last_name, phone_number, address, country, email, password} = req.body
        Customers.create({
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            address: address,
            country: country,
            email: email,
            password: password
        })
            .then(() => res.redirect('/customer/register'))
            .catch(err => res.send(err))
    }
    static login(req, res) {
        let message = req.app.locals.message
        delete req.app.locals.message
        res.render('login', {message})
    }
    static loginCheck (req, res) {
        const {email, password} =  req.body
        Customers.findOne({
            where: {
                email,
                password
            }
        })
        .then((result)=>{
            if(result){
                // console.log(result)
                req.session.isLogin = true

                res.redirect('/customer/product/'+result.id+'/customer')

                req.session.user = result
<<<<<<< HEAD
                res.redirect('/customer/product')
=======
                res.redirect('/customer/product/customer')

>>>>>>> db7e2efd844f593e7360b8e06c1d77ecef108d11
            }else{
                req.app.locals.message = 'password/username salah'
                res.redirect('/customer/login')
            }
        })
        .catch((err)=>{
            res.send(err)
        })
    }
}

module.exports = CustomerController