// https://www.youtube.com/watch?v=eB9Fq9I5ocs

// Tutorials by: Traversy Media.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mssqlserver = require('mssql');
var port = 3000;

// Connect to mongoose

mongoose.connect('mmongodb:////localhost/bookstore');
mssqlserver.connect('mssql://localhost/')
var db = mongoose.connection;

//app.get() = this means we will be getting what ever is returned by the Url in the given brackets
app.get('/', function (req , res) {
    res.send('Please use API end point.. /api/books or /api/genr ');
});

app.listen(port);
console.log("Running server on port: "+port)

