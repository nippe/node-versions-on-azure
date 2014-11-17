var express = require('express');
var router = express.Router();


router.get('/versions', function(req, res){
	res.json({
		node_version: process.version,
		appsetting_version: process.env.WEBSITE_NODE_DEFAULT_VERSION ? process.env.WEBSITE_NODE_DEFAULT_VERSION : 'N/A'
	});
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
