var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am a total ninja!!!');
});

app.get('/nickname', function(request, response){
    response.send('pleasant-herring');
});


app.listen(process.env.PORT || 4000);