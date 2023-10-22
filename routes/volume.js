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

router.post('/r', (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let num3 = req.body.num3;
  let area;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num3 = parseFloat(num3);

  area = num1 * num2 * num3;
  area = area.toFixed(2);

  res.send({area: area});
})

router.post('/c', (req, res) => {
  let num = req.body.num;
  let area;

  num = parseFloat(num);
  area = num * Math.PI * Math.PI;
  area = area.toFixed(7);

  res.send({area: area});
})

module.exports = router;
