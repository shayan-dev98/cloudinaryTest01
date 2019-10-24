const express = require('express')
const ejs = require('ejs');
const dotenv = require('dotenv/config')
//const script = require('./public/script')

const router = require('./router.js')


let app = express()


//Serving static files such as .js,.css,.jpg,etc.
app.use(express.static('public'));


//EJS fornt-end code
app.set('view engine', 'ejs');


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes

//app.get('/', function (req, res) { res.render('index.ejs') });
app.use('/', router) //Here 'router' is variable name.


app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))