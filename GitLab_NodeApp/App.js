var http = require('http');					
					var fs =  require('fs');
					
					//load a file here
					fs.readFile('index.html', (err, html) => {
						if(err)
						{
							throw err;
						}
					});
					
					var hostname = '127.0.0.1';
					var port = 3000;

					var server = http.createServer((req , res) => {
						res.statusCode = 200;
						res.setHeader('Content-type','text/plain');
						res.write(html);
						res.end();
					});

					server.listen ( port , hostname, () => {
						console.log('server started on port : ' + port);
					});