var express = require('express');
var router = express.Router();
var Card = require('../models/card');

router.get('/', function(req, res, next) {
  Card.create({ question: 'what color is the sky?', answer: 'blue' }, function (err, card) {
    if (err) return handleError(err);
  	res.send({card: card});
  });
});

module.exports = router;