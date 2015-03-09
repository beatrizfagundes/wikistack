var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('index');
	model.Page.find( function(err, docs) {
		//console.log(docs);
		res.render('index', {docs: docs});
	});
});

router.get('/about', function(req, res) {
    res.render('about_us');
});

router.get( '/wiki/:name_page', function (req, res) {
	model.Page.findOne({ url_name: req.params.name_page }, function(err, doc) {
		res.render('show', {doc: doc});
	});
});

/*
router.get('/add', function (req, res) {
    var name = req.params.name;
    res.render( 'addpage');
});*/

module.exports = router;
