//Http routing

var appRouter = function(app) {

    var request = require('request');

    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/account", function(req, res) {
        var accountMock = {
            "username": "Massy",
            "password": "Gomba1234",
            "twitter": "@massy"
        }
        if(!req.query.username || !req.query.password) {
            return res.send({"status": "error", "message": "missing username"});
        } else if(req.query.username != accountMock.username || req.query.password != accountMock.password) {
            return res.send({"status": "error", "message": "wrong username pr password"});
        } else {
            return res.send(accountMock);
        }
    });




    app.get("/gitlabapi", function(req, res){

        
        // var url = "https://gitlab.com/api/v4/projects";
        // request(url, function (error, response, body) {
        //     if (!error && response.statusCode == 200) {
        //         curTemp = JSON.parse(body).main.temp;  // curTemp holds the value we want
        //         var result = tweet(curTemp);
        //         return response.send(result);
        //     }else{
        //         return res.send({"status": "error", "message": "Sorry no data was recieved....!!!"});
        //     }
        // })

    });
    // but I want to use it here
function tweet(data){
    console.log(data)
}

}

module.exports = appRouter;