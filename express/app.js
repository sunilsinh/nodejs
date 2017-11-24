var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	//res.send("This is home page");
	res.sendFile(__dirname + '/home.html');
});

app.get('/contact', function(req, res){
	//res.send("This is contact page");
	res.sendFile(__dirname + '/contact.html');
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


app.listen(5000);