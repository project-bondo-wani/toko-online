const {Admins} =  require('../models')

class Controller{

    static loginForm(req, res){
        res.render('admin/login')
    }

    static login(req, res){
        console.log(req.body)
        const {username, password} =  req.body
        Admins.findOne({
            where: {
                username,
                password
            }
        })
        .then((result)=>{
            if(result){
                req.session.isLogin = true
                res.redirect('/admin')
            }else{
                res.send('password/username salah')
            }
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static home(req, res){
        Admins.findAll()
        .then((result)=>{
            // res.send(result)
            res.render('admin', {result})
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static getAll(req, res){

    }

    static createForm(req, res){
        res.render('admin/register')
    }

    static create(req, res){
        const {username, first_name, last_name, password} = req.body

        const data = {
            first_name,
            last_name,
            password,
            username
        }
        
        Admins.create(data)
        .then((result)=>{
            res.redirect('/admin')
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static updateForm(req, res){
        const id = +req.params.id
        Admins.findByPk(id)
        .then((result)=>{
            res.render('admin/updateAdmin', {result})
        })
        .catch((err)=>{
            res.send(err)
        })
        
    }

    static update(req, res){
        const id = +req.params.id
        const {username, first_name, last_name, password} = req.body

        const data = {
            first_name,
            last_name,
            password,
            username
        }

        Admins.update(data, {
            where:{
                id
            }
        })
        .then((result)=>{
            res.redirect('/admin')
        })
        .catch((err)=>{
            res.send(err)
        })

    }

    static delete(req, res){
        const id = +req.params.id
        Admins.destroy({
            where:{
                id
            }
        })
        .then((result)=>{
            res.redirect('/admin/home')
        })
        .catch((err)=>{
            res.send(err)
        })

    }
}

module.exports = Controller