//Http routing

var appRouter = function(app) {

    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/account", function(req, res) {
        var accountMock = {
            "username": "Massy",
            "password": "Gomba1234",
            "twitter": "@massy"
        }
        if(!req.query.username) {
            return res.send({"status": "error", "message": "missing username"});
        } else if(req.query.username != accountMock.username) {
            return res.send({"status": "error", "message": "wrong username"});
        } else {
            return res.send(accountMock);
        }
    });

}

module.exports = appRouter;