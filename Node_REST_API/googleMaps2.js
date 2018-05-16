// get walking directions from central park to the empire state building
var http = require("http");
    url = "http://git.sahomeloans.com/api/v4/projects";

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