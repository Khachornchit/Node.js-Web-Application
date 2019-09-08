var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  req.session.views = (req.session.views || 0) + 1;
  res.render('users', { title: 'Users' });
});

module.exports = router;