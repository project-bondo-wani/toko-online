const {ProductCategories} =  require('../models')

class Controller{

    static getAll(req, res){
        ProductCategories.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        .then((result)=>{
            // res.send(result)
            res.render('admin/category', {result})
        })
        .catch((err)=>{
            res.render(err)
        })
    }

    static createForm(req, res){
        
    }

    static create(req, res){
        const {category_name} = req.body
        const data = {
            category_name
        }
        ProductCategories.create(data)
        .then((result)=>{
            res.redirect('/admin/category/')
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
        const id = req.params.id
        ProductCategories.destroy({
            where:{
                id
            }
        })
        .then((result)=>{
            res.redirect('/admin/category/')
        })
        .catch((err)=>{
            res.send(err)
        })

    }
}

module.exports = Controller