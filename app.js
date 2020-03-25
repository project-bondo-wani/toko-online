const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use('/', router)

app.listen(PORT, (req, res)=>{
    console.log('listening port', PORT)
})