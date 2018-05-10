var express = require('express');
var app = express();
var sql = require("mssql");
var Connection = require('tedious').Connection; 

var Connection = require('tedious').Connection;  
var config = {  
    userName: 'SAHL\\MasimbaN',  
    password: 'Healer2018',  
    server: 'D200053.database.windows.net'  
};  


var connection = new Connection(config);  
connection.on('connect', function(err) {  
// If no error, then good to proceed.  
    console.log("Connected");  
    executeStatement(); 
});  

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

function executeStatement() {  
    request = new Request("SELECT TOP (200) departmentID, departName  FROM Department", function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    var result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    connection.execSql(request);  
}  
// app.get('/', function (req, res) {
   
    

//     // config for your database
//     var config = {
//         user: "SAHL"+"\\"+"MasimbaN",
//         password: 'Healer2018',
//         server: 'D200053.database.windows.net',
//         driver: 'tedious',
//         database: 'EmployeeDB2'
//     };

//     var connection = new Connection(config);  
//     connection.on('connect', function(err) {  
//     // If no error, then good to proceed.  
//         console.log("Connected");  
//     });  
    
//     // // connect to your database
//     // sql.connect(config, function (err) {  

//     //     if (err) console.log(err);
//     //     // create Request object
//     //     var request = new connection.Request();           
//     //     // query to the database and get the records
//     //     request.query('select * from EmployeeDB2.Department', function (err, recordset) {
//     //         if (err) console.log(err)
//     //         // send records as a response
//     //         res.send(recordset);
//     //     });
//     // });

// });

// var server = app.listen(5000, function () {
//     var user = "SAHL"+"\\"+"MasimbaN";
//     console.log('User name: ' + user);
//     console.log('Server is running..');
// });
