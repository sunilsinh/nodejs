// Node js is work with asynchronous. It does not wait for 

/*console.log("Hello World");
setTimeout(function(){
	console.log("Ohho hello world i am back");
}, 2000);
console.log("Bye World");*/


/*for(var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i + " second(s) elapsed");
  }, 1000);
}*/
/*
for(var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(function() {
      console.log(i + " second(s) elapsed");
    }, i * 1000);
  })(i);
}*/

for(var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i + " second(s) elapsed");
  }, i * 1000);
}