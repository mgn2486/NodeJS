// https://www.youtube.com/watch?v=eB9Fq9I5ocs

// Tutorials by: Traversy Media.




var express = require('express');
var request = require('request');

var app = express();

var port = 3000;


var testRouter = express.Router();

myRouter.route('/GetProjects')
  .get(function(req, res){
    request({
      method: 'GET',
      uri: 'https://gitlab.com/api/v4/projects',
      headers: {'Authorization': 'Bearer ' + 'yC8hxbBg8_PdbgkyF9AQ'}
    }, function (error, response, body){
      if(!error && response.statusCode == 200){
        res.json(body);
      }
    })
  });


app.use('/api', bookRouter);

var myRouter = express.Router();

app.get('/', function(req, res){
  res.send('Welcome to my API');
});

app.listen(port, function() {
  console.log('API Ccall is running my app on PORT: ' + port);
});

















// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var mssqlserver = require('mssql');
// var port = 3000;

// // Connect to mongoose

// mongoose.connect('mmongodb:////localhost/bookstore');
// mssqlserver.connect('mssql://localhost/')
// var db = mongoose.connection;

// //app.get() = this means we will be getting what ever is returned by the Url in the given brackets
// app.get('/https://gitlab.com/api/v4/projects?private_token=yC8hxbBg8_PdbgkyF9AQ', function (req , res) {
    
//     res.send('Please use API end point.. /api/books or /api/genr ');
//     res.
// });

// app.listen(port);
// console.log("Running server on port: "+port)