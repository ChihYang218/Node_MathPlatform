var express = require('express');
var router = express.Router();

// 取得 server 端 IP，需要 underscore 模組（開發使用）
const sip = require('underscore').chain(require('os').networkInterfaces()).values()
    .flatten().find({family: 'IPv4', internal: false}).value().address;
console.log('Server IP='+sip);

router.get('/', function(req, res, next) {
  res.render('index', { title: '專案首頁' });
});

module.exports = router;
