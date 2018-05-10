//1.
var sql = require('mssql');
//2.
var config = {
    server: 'D200053',
    database: 'EmployeeDB2',
    user: 'SAHL'+'\\'+'MasimbaN',
    password: 'Healer2018',
    port: 1433
};
//3.
function loadEmployees() {
    console.log("SAHL"+"\\"+"MasimbaN")
    //4.
    var dbConn = new sql.ConnectionPool(config);
    //5.
    dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.
        request.query("select * from EmployeeDB2").then(function (recordSet) {
            console.log(recordSet);
            dbConn.close();
        }).catch(function (err) {
            //8.
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });
}
//10.
loadEmployees();