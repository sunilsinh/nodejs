var express = require('express');

var app = express();

// Set template engine using express module for that we need to create view folder and
// Within that we will save file with extension .ejs
app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));

// body parser for handling post data
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Without view folder
/*app.get('/', function(req, res){
	//res.send("This is home page");
	res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
	//res.send("This is contact page");
	res.sendFile(__dirname + '/contact.html');
});*/

// using view folder
app.get('/', function(req, res){
	//res.send("This is home page");
	res.render('index');
});

app.get('/contact', function(req, res){
	console.log(req.query);
	//res.send("This is contact page");
	res.render('contact',{qs:req.query}); // we are here sending data http://localhost:5001/contact?dept=software
});
app.post('/contact',urlencodedParser, function(req, res){
	console.log(req.body);
	//res.send("This is contact page");
	res.render('contact-success',{data:req.body}); // we are here sending data http://localhost:5001/contact?dept=software
});
// As paramters
/*app.get('/profile/:name', function(req, res){
	res.send("This is profile page "+ req.params.name);
});*/

app.get('/profile/:name', function(req, res){
	var data = {
		age:25,
		job:"ninja",
		hobbies : ['eating','fighting','fishing']

	}
	res.render('profile',{person:req.params.name, data:data});
});


app.listen(5002);
console.log("Server woking on 5002");