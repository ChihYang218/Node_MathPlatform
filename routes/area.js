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

router.post('/r/:num1/:num2', (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let area;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  area = num1 * num2;
  area = area.toFixed(4);

  res.send({area: area});
})

router.post('/c/:num', (req, res) => {
  let num = req.params.num;
  let area;
  num = parseFloat(num);
  area = Math.pow(num, 2)*Math.PI;
  area = area.toFixed(7);

  res.send({area: area});
})

module.exports = router;
