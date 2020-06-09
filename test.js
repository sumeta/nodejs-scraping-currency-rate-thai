var express = require('express');
var crth = require('./index');
var app = express();
var port = 8084;

app.listen(port, function() {
 console.log('Listening on : http://localhost:' + port);
});

app.get('/', function(req, res) {

    crth.bot().then(value => {

        res.json({
            message: value
        });
    });

});
  
