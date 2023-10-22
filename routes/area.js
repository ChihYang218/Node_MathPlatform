var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('area', { title: '面積計算' });
});

router.post('/s/:num', (req, res) => {
  let num = req.params.num;
  let area;
  num = parseFloat(num);
  area = Math.pow(num, 2);
  area = area.toFixed(4);

  res.send({area: area});
})

module.exports = router;
