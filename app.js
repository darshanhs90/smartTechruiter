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




//send message


app.get('/message', function(req, res) {

    clientTwilio.sendMessage({

        to: '+14697672278', // Any number Twilio can deliver to
        from: '+14694164117', // A number you bought from Twilio and can use for outbound communication
        body: 'word to your mother.' // body of the SMS message

    }, function(err, responseData) { //this function is executed when a response is received from Twilio

        if (!err) { // "err" is an error received during the request, if any

            // "responseData" is a JavaScript object containing data received from Twilio.
            // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
            // http://www.twilio.com/docs/api/rest/sending-sms#example-1

            console.log(responseData.from); // outputs "+14506667788"
            console.log(responseData.body); // outputs "word to your mother."

            res.end('message sent')
        }
    }); * /
});

//twilio confirmation call
app.get('/call', function(req, res) {

    clientTwilio.calls.create({
        to: "+14697672278",
        from: "+14694164117",
        url: "https://www.dropbox.com/s/3nsmfduffri1lg5/twilio.xml",
        method: "GET",
        fallbackMethod: "GET",
        statusCallbackMethod: "GET",
        record: "false"
    }, function(err, call) {
        console.log(call.sid);
        res.end('sid is' + call.sid);
    });
});


//sendgrid mail

app.get('/sendMail', function(reqst, rspns) {
    console.log(reqst.query); //here lies the params
    var toEmailAddress = reqst.query;
    var subjectMail;
    var name;
    var companyName;
    var textMail;
    //get from "name","to email address","company name"
    sendgrid.send({
        to: 'hsdars@gmail.com',
        from: 'hsdars@gmail.com',
        subject: 'Hello World',
        text: 'My first email through SendGrid.'
    }, function(err, json) {
        if (err) {
            return console.error(err);
        }
        console.log(json);
    });

});



//analyse company score in twitter passing tweet to ibm sentiment analyser
app.use('/twitterCompanySentiment', function(reqst, respns) {

    //get companyname from request
    var companyName;
    client.get('search/tweets', {
        q: companyName
    }, function(error, tweets, response) {

        var length = (tweets.statuses.length);
        console.log(length);
        var total = 0;
        var count = 0;
        (tweets.statuses).forEach(function(e) {
            var text = e.text;
            console.log(text);
            alchemy.sentiment(text, {}, function(err, response) {
                if (err)
                    throw err;
                var sentiment = response.docSentiment;
                console.log(sentiment);
                //asd=sentiment;
                //res.send(asd);
                total += sentiment
            });
        });
        total = total / length;
        res.send(total);
    });
});

//company info
app.get('/companyInfo', function(reqst, respns) {
    //company website
    https.get('https://api.fullcontact.com/v2/company/lookup.json?domain=google.com&apiKey=f6e2b2695278badc',
        function(response) {
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {

                // Data reception is done, do whatever with it!
                var parsed = JSON.parse(body);
                console.log('linkedin');
                res.send(parsed);
            });

        });

});



//get student info
app.get('/personInfo', function(reqst, respns) {
    //person email id  
    https.get('https://api.fullcontact.com/v2/person.json?email=bart@fullcontact.com&apiKey=f6e2b2695278badc',
        function(response) {
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {

                // Data reception is done, do whatever with it!
                var parsed = JSON.parse(body);
                console.log('linkedin');
                res.send(parsed);
            });

        });

});