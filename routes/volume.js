var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('volume', { title: '體積計算' });
});

router.post('/s', (req, res) => {
  let num = req.body.num;
  let area;

  num = parseFloat(num);
  area = Math.pow(num, 3);
  area = area.toFixed(2);

  res.send({area: area});
})

module.exports = router;
