var express = require('express');
var router = express.Router();
var comments = require('../data/comments.json');

router.get('/', function(req, res, next) {
  res.send(comments);
} );

router.post('/', function(req, res, next) {
  var comment = {
    name: req.body.message,
    type: req.body.imageId
  };

  memes.push(comment);

  var string = JSON.stringify(comment);

  var filePath = path.join(__dirname, '../data/comments.json');

  fs.writeFile(filePath, string, function(err) {
    if (err) {
      next(err);
    } else {
      res.send(comment);
    }
  });
});

module.exports = router;