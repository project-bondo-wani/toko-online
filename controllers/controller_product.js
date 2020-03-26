const {Products, ProductCategories} =  require('../models')

class Controller{

    static getAll(req, res){
        
        Products.findAll({
            order:[
                ['id', 'ASC']
            ],
            include:[ProductCategories]
        })
        .then((result)=>{
            res.render('admin/product', {result})
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static createForm(req, res){
        ProductCategories.findAll({
            order:[
                ['id', 'ASC']
            ]
        })
        .then((result)=>{
            // res.send(result)
            res.render('admin/product/add', {result})
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static create(req, res){
        const {name, price, stock, ProductCategoryId} = req.body
        const data = {
            name,
            price,
            stock,
            image : req.file.filename,
            ProductCategoryId
        }
        Products.create(data)
        .then((result)=>{
            res.redirect('/admin/product')
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static updateForm(req, res){

    }

    static update(req, res){

    }

    static delete(req, res){
        const id = +req.params.id
        Products.destroy({
            where:{
                id
            }
        })
        .then((result)=>{
            res.redirect('/admin/product')
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static getAllCustomer(req, res){
        const {user} = req.session
        Products.findAll({
            order:[
                ['ProductCategoryId', 'ASC']
            ],
            include:[ProductCategories]
        })
        .then((result)=>{
            // res.send(result)
            res.render('customer/product/customerShow', {result, user})
        })
        .catch((err)=>{
            res.send(err)
        })
}
}

module.exports = Controller