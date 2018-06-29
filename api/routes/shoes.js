var express = require('express');
var router = express.Router();
var shoes = require('../shoes');

router.get('/:shoeId', function(req, res, next) {
  res.send(shoes.find(shoe=>shoe.id===req.params.shoeId));
});

router.get('/', function(req, res, next) {
  res.send(shoes);
});

module.exports = router;
