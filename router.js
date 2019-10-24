const express = require('express')
const router = express.Router()



router.get('/', function (req, res) {
 res.render('index.ejs')
})

router.get('/about', function (req, res) {
 res.send('This is About Page.')
})

module.exports = router