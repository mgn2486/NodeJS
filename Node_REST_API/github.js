var request = require("request");
var userDetails;

function initialize() {
    // Setting URL and headers for request
    var options = {
        url: 'http://git.sahomeloans.com/gitlab-ci/api/v4/projects',
        headers: {
            'User-Agent': 'request',
            'Content-Type':'application/json'
        }
    };
    // Return new promise 
    return new Promise(function(resolve, reject) {
    	// Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}

function main() {
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        console.log(userDetails)
    }, function(err) {
        console.log(err);
    })
}

main();