var express = require('express');
var router = express.Router();
var comments = require('../data/comments.json');

router.get('/', function(req, res, next) {
  res.send(comments);
} );


module.exports = router;