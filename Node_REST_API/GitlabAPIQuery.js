//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

// Setting Base directory
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 88, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    user:  "SAHL\\MasimbaN",
    password: "Healer2018",
    server: "D200053",
    database: "EmployeeDB2"
};

//Function to connect to database and execute query
var  executeQuery = function(res, query){	
	sql.connect(dbConfig, function (err) {
		if (err) {   
			console.log("Error while connecting database :- " + err);
			res.send(err);
		}
		else {
			// create Request object
			var request = new sql.Request();
			// query to the database
			request.query(query, function (err, res) {
				if (err) {
					console.log("Error while querying database :- " + err);
					res.send(err);
				}
				else {
					res.send(res);
				}
			});
		}
	});	
}

app.get('https://gitlab.com/api/v4/projects?private_token=yC8hxbBg8_PdbgkyF9AQ', function (req, res) {
    res.send('Please use API end point.. ');
  });

app.get("/api/user ", function(req , res){
	var query = "select * from Employee2 where fname = [user]";
	executeQuery (res, query);
});

//POST API
 app.post("/api/user ", function(req , res){
	var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password)";
	executeQuery (res, query);
});

//PUT API
 app.put("/api/user/:id", function(req , res){
	var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
	executeQuery (res, query);
});

// DELETE API
 app.delete("/api/user /:id", function(req , res){
	var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
	executeQuery (res, query);
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