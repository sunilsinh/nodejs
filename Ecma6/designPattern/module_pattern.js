// Module Design Pattern
/*
Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes -
 that is, a closure that protect variables and methods (however, it will return an object instead of a function).
  This is what it looks like:
*/

/*(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})();
*/


var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined



