var data = [
		{item:'get milk'},
		{item:'walk dog'},
		{item:'kick some coding ass'}

	];

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports = function(app){
	// Handle get request
	app.get('/todo',function(req, res){
		res.render('todo', {todos : data });
	});
	// Handle post request
	app.post('/todo',urlencodedParser,function(req, res){
		data.push(req.body);
		res.json(data);
	});

	// Handle delete request
	app.delete('/dodo', function(req, res){
		data = data.filter(function(todo){
			return todo.item.replace(/ /g, '-') !== req.params.item;
		});
	});
}