var http = require('http');

http.createServer(function (req, res) {
				  res.writeHead(200, {'Content-Type': 'text/html'});
					res.end('<html><body>Version from node: ' + process.version + '<br>Version from appsettings: ' + process.env.WEBSITE_NODE_DEFAULT_VERSION + '</body></html>');

}).listen(3000);
