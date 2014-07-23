var fs = require('fs');

var express = require('express');

var app = express();

// var fileContents = fs.readFileSync('data.txt');

app.get('/', function(req, res) {
	fs.readFile('data.txt', function(err, data){
	res.header('Content-Type', 'text/html');
	res.send(data);
	});
});


// app.get('/', function(req, res) {
// 	res.header('Content-Type', 'text/html');
// 	res.send(fileContents);
// });

var server = app.listen(7020, function() {
	console.log('Express server listening on port ' + server.address().port);
});


