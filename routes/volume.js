var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('volume', { title: '體積計算' });
});

module.exports = router;
