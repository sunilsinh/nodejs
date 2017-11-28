/*var roles = new Map([ 
   ['r1', 'User'], 
   ['r2', 'Guest'], 
   ['r3', 'Admin'], 
]);  
console.log(roles.get('r2'));*/


/*var roles = new Array( 
   ['r1', 'User'], 
   ['r2', 'Guest'], 
   ['r3', 'Admin'], 
);  
console.log(roles);*/

/*var var_name = new Class_name {  
} */

// Object Orientation is a software development paradigm that follows real-world modelling
// Object − An object is a real-time representation of any entity
/*'use strict';
class Polygon { 
   constructor(height, width) { 
      this.height = height; 
      this.width = width; 
   } 

   	getHeight() {
   	 return this.height;
   }
}
var PolygonObj = new Polygon(50,60);
console.log("Height " + PolygonObj.getHeight());
*/

/*class StaticMem { 
   static disp() { 
      console.log("Static Function called") 
   } 
} 
StaticMem.disp() //invoke the static method*/

/*class Person{ } 
var obj = new Person() 
var isPerson = obj instanceof Person; 
console.log(" obj is an instance of Person " + isPerson); */


/********Inheritance *****************/

/* Single level*/
/*class Shape { 
   constructor(a) { 
      this.Area = a
   } 
} 
class Circle extends Shape { 
   disp() { 
      console.log("Area of the circle:  "+this.Area) 
   } 
} 
var obj = new Circle(223); 
obj.disp(); */

/* Multi level*/

/*class A {
	constructor(a) {
		this.Area = a;
	}
}

class B extends A{
	test_b() {
		console.log("I m in class B");	
	}
	
}

class C extends A{
	test_c() {
		console.log("I m in class C");	
		console.log("Area of the circle:  "+this.Area); 
	}
	
}


$obC = new C(253); // We have passed parameter because C extends class A and in A class has constructor.

console.log($obC.test_c());*/

// overriding

/*class PrinterClass { 
   doPrint() {
      console.log("doPrint() from Parent called…") 
   } 
}  
class StringPrinter extends PrinterClass { 
   doPrint() { 
      super.doPrint(); // Super keyword use to print parent class method 
      console.log("doPrint() is printing a string…") 
   } 
} 
var obj = new StringPrinter() 
obj.doPrint()*/

	// Blocking function
   /*function notifyAll(fnSms, fnEmail) {   
      console.log('starting notification process');   
      fnSms();   
      fnEmail();   
   }   


   notifyAll(
   		function() {   
	      console.log("Sms send ..");   
	    }, 
	    function() {   
	      console.log("email send ..");   
	    }

   );   
   console.log("End of script"); */
   //executes last or blocked by other methods   


//  Non blocking or asynchronous

/*function notifyAll(fnSms, fnEmail) {   
      setTimeout(function() {   
         console.log('starting notification process');   
         fnSms();   
         fnEmail();   
      }, 2000);   
   }   
   notifyAll(function() {   
      console.log("Sms send ..");   
   },  
   function() {   
      console.log("email send ..");   
   });   
   console.log("End of script"); //executes first or not blocked by others*/

/*var a = 100; 
var b = 0; 
try { 
   if (b == 0 ) { 
      throw("Divide by zero error."); 
   } else { 
      var c = a / b; 
   } 
} 
catch( e ) { 
   console.log("Error: " + e ); 
}
*/

var radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();
console.log(radData.toLowerCase());


