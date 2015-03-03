var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/addpage', function (req, res) {
    var name = req.params.name;
    res.render( 'addpage');
});

module.exports = router;
