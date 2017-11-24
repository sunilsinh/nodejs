var express = require('express');

var app = express();

var todoController = require('./controllers/todoController');

// set up template engine 
app.set('view engine','ejs');

// staic files

app.use(express.static('./public'));

// fire todoController
todoController(app);


//localhost:3000/assets/styles.csss

//listen to port
app.listen(2222);
console.log("You are listening to port 2222");