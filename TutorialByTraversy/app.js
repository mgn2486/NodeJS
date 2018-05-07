var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer((req , res) => {
	res.statusCode = 200;
	res.setHeader('Content-type','text/plain');
	res.end('Hello World !!!');
});

server.listen ( port , hostname, () => {
	console.log('server started on port : ' + port);
});