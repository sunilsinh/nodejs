/*var http = require("http");

var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');

myReadStream.pipe(myWriteStream);*/

var http = require('http');
var fs = require("fs");

var server = http.createServer(function(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	//res.writeHead(200,{'content-type':'application/json'});

	//var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
	var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
	myReadStream.pipe(res); // its like res.end("Hey sunil");

	
});

server.listen(3000,'127.0.0.1');

console.log("Your program listening is 3000");
