/*jshint node:true*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express = require('express');
var request = require('request');
var https = require('https');
var cors = require('cors');
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'LmNp3JwAQZnuBr4SQFaM7UZG3',
    consumer_secret: 'Xps6ziqIhZ0exAPoIAeyqj7myu7L78ZLHQDni67dzD9koJQTAD',
    access_token_key: '151128859-F4Wk8KebqH4ZDwp8tMWY8PkoTQzfiEJrN1t2Knfc',
    access_token_secret: 'czQre16YZKoC4Csi18gGufu8PxF733aL5VnzbhurlGvHw'
});
var watson = require('watson-developer-cloud');
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('7b6bf4773c39c9e271f6bd999fea5df5179a6dad');
var sendgrid = require('sendgrid')('username', 'password');
var accountSid = 'AC07275e4294f1b0d42623c3ec9559911e';
var authToken = '650d049a9bd99323fb899ce4b9e84fcc';
var clientTwilio = require('twilio')(accountSid, authToken);
var speech_to_text = watson.speech_to_text({
    username: '1a4e2a43-2a65-4e28-b9bc-2947c6a48e47',
    password: 'WNMkUbFzLf6c',
    version: 'v1'
});
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
  
// create a new express server
var app = express();
app.use(cors());
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
//app.listen(appEnv.port, appEnv.bind, function() {
app.listen(appEnv.port, appEnv.bind, function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

app.get('/home',function(req,res){

  clientTwilio.calls.create({
                                            to: "+14697672278",
                                            from: "+14694164117",
                                            url: "https://www.dropbox.com/s/3nsmfduffri1lg5/twilio.xml",
                                            method: "GET",
                                            fallbackMethod: "GET",
                                            statusCallbackMethod: "GET",
                                            record: "false"
                                        }, function(err, call) {
                                            if (err)
                                                console.log(err);
                                            console.log(call.sid);
                                            res.end(call.sid);
                                        });

});






});