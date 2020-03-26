const {Orders, Products, Customers} = require('../models')

class Controller{
    static getAll(req, res){

    }

    static getByUserId(req, res){
        const {user} = req.session
        const id = req.params.id
        Orders.findAll({
            include: [Products],
            where:{
                CustomerId: id
            }
        })
        .then((result)=>{
            // res.send(result)
            res.render('customer/cart', {result, user})
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static add(req, res){
        const {CustomerId, ProductId, quantity, delivery_address,stock} = req.body
        const data = {
            CustomerId,
            ProductId,
            quantity,
            delivery_address
        }
        Orders.create(data)
        .then((result)=>{
            let newStock = stock - quantity
            return Products.update({stock:newStock},{
                where:{
                    id:ProductId
                }
            })
        })
        .then((result)=>{
            res.redirect('/customer/product')
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static update(){

    }
}

module.exports = Controller