var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('area', { title: '面積計算' });
});

module.exports = router;
