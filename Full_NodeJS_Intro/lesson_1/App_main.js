var d = require('./module1');

console.log(d);
console.log("hi");

//The webserrver comes buiult in with node js, so now we will create a webServer

var httpServer = require('http');
var a = 1;
var server = httpServer.createServer(function(request, response){

    console.log('user :'+ (a+1));
    response.write("Hey What can we do for you!!!");
    response.end();
});

server.listen(3004);                