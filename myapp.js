// Add mysql module
var mysql = require('mysql');
// create connnection
var connection = mysql.createConnection({ 
    host     : 'localhost', 
    user     : 'root', 
    password : '', 
    database : 'node' 
}); 

// Checked connection
connection.connect(function(err) {
		if(err) {
			console.log('error connecting: ' + err.stack);
			return;
		}
		console.log('connected as id ' + connection.threadId); 
});
// Insert data into student table

var data = {
	name : "sunil",
	college_name :"DDA",
	contact_no: "8010646833"
}
connection.query("INSERT INTO `student` SET ?",data,function(err, res){
	if (err) {
  		throw err; 
  	}
  console.log('Last insert ID:', res.insertId);
});
// Select data from table
connection.query('SELECT * FROM student', function(err, rows, fields)  
{ 
  if (err) {
  	throw err; 
  }
  console.log(rows); 
}); 


// End server Connection
connection.end();