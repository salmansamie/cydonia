/**
 * Created by salman.rahman on 5/10/17.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

app.post('/event', function(request, response){
    console.log("body", request.body.hello)
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
