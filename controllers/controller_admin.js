const {Admins} =  require('../models')
const bcrypt = require('bcrypt');
const saltRounds = 10;


class Controller{

    static loginForm(req, res){
        res.render('admin/login')
    }

    static login(req, res){
        console.log(req.body)
        const {username, password} =  req.body
        Admins.findOne({
            where: {
                username
            }
        })
        .then((result)=>{
            if(result){
                bcrypt.compare(password, result.password, (err, isvalid)=>{
                    if(err){
                        res.send(err)
                    }else{
                        if(isvalid){
                            req.session.isLogin = true
                            req.session.Id = result.id
                            res.redirect('/admin')
                        }else{
                            res.redirect('/admin/login')
                        }
                    }
                })
            }else{
                res.send('password/username salah')
            }
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static logout(req, res){
        req.session.isLogin = false
        res.redirect('/admin')
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
        console.log(username)
        Admins.findAll({
            where: {
                username
            }
        })
        .then((result)=>{
            if(result.length  > 0){
                res.send('username sudah terpakai')
            }
            else{
                bcrypt.genSalt(saltRounds, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        // Store hash in your password DB.
                        const data = {
                            first_name,
                            last_name,
                            password : hash,
                            username
                        }
                        
                        Admins.create(data)
                        .then((result)=>{
                            res.redirect('/admin/login')
                        })
                        .catch((err)=>{
                            res.send(err)
                        })
                    });
                });
            }
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
            res.redirect('/admin')
        })
        .catch((err)=>{
            res.send(err)
        })

    }
}

module.exports = Controller