var request = require("request");
var userDetails;

function getData(url) {
    // Setting URL and headers for request
    var options = {
        url: url,
        method: 'POST',
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/json',
            'private_token':'3NziVHc9C5y2Yfn--MHx'
        },
        form: {"name": "ExperianTesTTestHarness"}
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
        // Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}

var errHandler = function(err) {
    console.log(err);
}

function main() {
    var userProfileURL = "https://gitlab.com/gombs/2269807/api/v3/projects";
    var dataPromise = getData(userProfileURL);
    // Get user details after that get followers from URLcls
    dataPromise.then(JSON.parse, errHandler)
               .then(function(result) {
                    userDetails = result;
                    // Do one more async operation here
                    var anotherPromise = getData(userDetails.followers_url).then(JSON.parse);
                    return anotherPromise;
                }, errHandler)
                .then(function(data) {
                    console.log(data)
                }, errHandler);
}



main();