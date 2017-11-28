
//##########Scope Local and Global

/*Any locally scoped items are not visible in the global scope -
 unless exposed, meaning if I define functions or variables within a new scope,
 it’s inaccessible outside of that current scope */

// Scope A: Global scope out here
/*var myFunction = function () {
  
  // Scope B: Local scope in here

};*/

// ######## Lexical Scope ##################

/* Whenever you see a function within another function, the inner function has access to the scope
 in the outer function, this is called Lexical Scope or Closure - also referred to as Static Scope */
 
 // Scope A
/*var myFunction = function () {
  // Scope B
  var name = 'Todd'; // defined in Scope B
  var myOtherFunction = function () {
    // Scope C: `name` is accessible here!
  };
};*/

// ################ Closures 

var sayHello = function (name) {
  var text = 'Hello, ' + name;
  return function () {
    console.log(text);
  };
};

// sayHello("sunil"); // The function returns a function, which means it needs assignment, and then calling:

//var helloTodd = sayHello('Todd');
//helloTodd(); // will call the closure and log 'Hello, Todd'
//sayHello('Bob')(); // calls the returned function without assignment $compile(template)(scope); Ajs uses like this


// ########## Private and Public Scope
// In many programming languages, you’ll hear about public and private scope, in JavaScript there is no such thing
// By using JavaScript design patterns, such as the Module pattern for example, we can create public and private scope.

/*(function () {
  // private scope inside here
})();*/

/*(function() {
  var myFunction = function () {
    console.log("Hello World");
  };
})();

myFunction();*/ // Uncaught ReferenceError: myFunction is not defined

//Success! We’ve created private scope. But what if I want the function to be public?
// There’s a great pattern (called the Module Pattern [and Revealing Module Pattern]) which allows us to scope our functions
// correctly, using private and public scope and an Object
//  Here I grab my global namespace, called Module, which contains all of my relevant code for that module:

// define module

/*var Module = (function () {
  return {
    employeeName: function () {
      console.log('Sunil singh');
    },
    designaation: function(){
    	console.log("Software Engineer");
    }
  };
})();

// call module + methods
Module.employeeName();
Module.designaation();

var classesExample = {
	name: "sunil"
}
console.log(classesExample.name);*/


// ########## really good example of public and provate #############

/*var Module = (function () {
  var privateMethod = function () {
  	console.log("Hello I am as private property");

  };
  return {
    publicMethod: function () {
    	console.log("Hello World i am as public property");
    	privateMethod();
    }
  };
})();


Module.publicMethod();*/


// ################# Better understanding for private and public in javascript ######################
//One neat naming convention is to begin private methods with an underscore,
// which visually helps you differentiate between public and private
/*
var Module = (function () {
  var myModule = {};
  var _privateMethod = function () {
  		console.log("Hello i am as private property and no one can access out of the class"  
  			+ " \n but using public property can be accessed");
  };

  myModule.publicMethod = function () {
  	console.log("Hello world i am as public property");
  };

  myModule.anotherPublicMethod = function () {
  	console.log("Hello world i am as another public property");

  	_privateMethod(); // Called private property

  };
  return myModule; // returns the Object with public methods
})();

// usage
Module.publicMethod();
Module.anotherPublicMethod();*/

// object 
/*var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37*/

// dependency injection
/*var myproject = new function() {
	this.open = function () {
		console.log("I am in parent class with open function");
	},
	this.close = function () {
		console.log("I am in parent class with close function");
	}
}


var Module = (function (obj) {

	//var test = "sunil";
	obj.open();
	obj.close();
	return {
		publicFunction : function() {
			console.log("Hello Testing time ");
		}
	};

})(myproject); // passes class object for dependency

Module.publicFunction();*/

var Module = (function () {
    
    var _hello = 'Hello World';

    var jss = {};
    
    jss.myFunction = function() {
    	console.log("test123 \n " + _hello);
    }
	return jss;

})();

Module.myFunction();



