var express = require('express');
var app = express();
var sql = require("mssql");
// config for your database
var config = {
    user: 'SAHL\\MasimbaN',  
    password: 'Healer2018',  
    server: 'D200053',
    database:'EmployeeDB2'
 };
 
app.get('/', function (req, res) { 
 
 // connect to your database
 sql.connect(config, function (err) {
 
 if (err) console.log(err);
 
 // create Request object
 var request = new sql.Request();
 
 // query to the database and get the data
 request.query('SELECT TOP (200) employeeID, fname, lname, gender, departmentID, city FROM Employee2', function (err, recordset) {
 
 if (err) console.log(err)
 
 // send data as a response
 res.send(recordset);
 
 });
 });
});
 
var server = app.listen(4000, function () {
 console.log('Server is running.. on Port 4000');
 user = 'SAHL\\MasimbaN';
 console.log(user);
 console.log(config);
});