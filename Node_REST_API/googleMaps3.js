// get walking directions from central park to the empire state building
var http = require("http");
var request = require('request');
    url = "http://git.sahomeloans.com/api/v4/projects";

    // Set the headers
    var headers = {
        'Content-Type':'application/x-www-form-urlencoded',
        'private-Token':'CynxpyWXsFkYmrK5voWi'
    }

    // Configure the request
    var options = {
        url: 'http://git.sahomeloans.com/api/v4/projects',
        method: 'GET',
        headers: headers
    }

    // Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body

        var data = JSON.parse(body);

        console.log("Number of repos: "+data.length);

        for(var i=0;i<data.length;i++){
            var index = i.toString();
            console.log(data[index]["name"]);
        }
        // console.log(body)
    }
});

/*

// get is a simple wrapper for request()
// which sets the http method to GET
var request = http.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    }); 

    response.on("end", function (err) {
        // finished transferring data
        // dump the raw data
        console.log(buffer);
        console.log("\n");
        data = JSON.parse(buffer);
        //route = data.name[0];

        // List of currently existing repos        

        for(var i=0;i<data.length;i++){
            var index = i.toString();
            console.log(data[index]["name"]);
        }
    }); 
});

*/