var http = require('http');
var fs = require("fs");

var server = http.createServer(function(req, res){
	console.log("Request URL is "+req.url);
	//res.writeHead(200,{'content-type':'text/plain'});

	if (req.url==='/contact') {
		res.writeHead(200,{'content-type':'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}

	else if (req.url==='/service') {
		res.writeHead(200,{'content-type':'text/html'});
		fs.createReadStream(__dirname + '/service.html').pipe(res);
	} 

	else if (req.url==='/home' || req.url==='/') {
		res.writeHead(200,{'content-type':'text/html'});
		fs.createReadStream(__dirname + '/home.html').pipe(res);
	} 
	else if(req.url==='/apis/ninja') {
		var ninja = [
		{
			name:"sunil",
			age :25
		},
		{
			name:"singh",
			age :30
		}];

		res.writeHead(200,{'content-type':'application/json'});
		res.end(JSON.stringify(ninja));
	}
	 else{
	 	res.writeHead(404,{'content-type':'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	 }

});

server.listen(4000,'127.0.0.1');

console.log("Your program listening is 4000");
