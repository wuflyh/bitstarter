fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/'));


app.get('/', function(request, response) {
  var buf = fs.readFileSync('./index.html', 'utf8');
    
  response.send(buf.toString());
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
