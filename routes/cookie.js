var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let cookie = req.cookies['Cookie-Hello'];
    console.log('Hello, cookie');
    console.log(`Cookie value : ${cookie}`);   
    res.render('cookieTest', { 
        title: 'Cookie Test' ,
        cookieValue: cookie 
    });
});

module.exports = router;