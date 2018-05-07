var http = require('http');
var dt = require('./ModuleDate');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
	res.write("\n Your name is "+ dt.myName);
    res.end();
}).listen(8080);