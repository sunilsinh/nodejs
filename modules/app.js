// global object require
// we have stored here count in variable as referrence.
// everything is stored in node as referrence 
// working with count.js

/*var count = require('./count');

console.log(count(["A","B","C"]));*/

// Working with stuff.js

/*var stuff = require('./stuff');
console.log(stuff.counter(["A","B","C","D"]));
console.log(stuff.adder(2,3));
console.log(stuff.adder(stuff.pi,5));*/

// Event module automatically loaded when we add as require

// Use event module to create custom events
/*var events = require('events');
var myEmitter = new events.EventEmitter();
myEmitter.on("someEvent",function(msg){
	console.log(msg);
});
myEmitter.emit("someEvent","Event was emitted");*/

// Reading and writiung files using node core module fs
// used to read and write file


// creating and removing directories


var fs = require("fs");

// fs.unlink("writeme.txt"); delete file
//fs.rmdirSync("stuff"); // create directory







