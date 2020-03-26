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
        let status = false
        const{email, password} = req.body
        // console.log
        Customers.findOne({
            where: {
                email,
                password
            }
        })
            .then(customer => {
                if(customer) {
                    res.send('suceeeeess')
                } else {
                    req.app.locals.message = 'you input wrong email or password'
                    res.render('login')
                }
            })
            .catch(err => res.send(err))
    }
}

module.exports = CustomerController