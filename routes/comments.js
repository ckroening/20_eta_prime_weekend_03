var express = require('express');
var router = express.Router();
var comments = require('../data/comments.json');
var path = require('path');
var fs = require('fs');

router.get('/', function(req, res, next) {
  res.send(comments);
} );

router.post('/', function(req, res, next) {
  /*
  var comment = {
    name: req.body.message,
    type: req.body.imageId
  };

  var string = JSON.stringify(comment);
  var filePath = path.join(__dirname, '../data/comments.json');

  fs.writeFile(filePath, string, function(err) {
    if (err) {
      next(err);
    } else {
      res.send(comment);
    }
  });
  */

  res.send('success!');
})
module.exports = router;
