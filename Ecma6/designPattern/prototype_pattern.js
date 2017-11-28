// The prototype model is used mainly for creating objects in performance-intensive situations.
// A fully initialized instance used for copying or cloning.


var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';

  this.car = function() {
  	return "car knowledge";
  }
}

TeslaModelS.prototype.newfunction = function() {
	return "New functiona added using prototype "+ "access base class property " +this.numWheels ;
};


// Create an object and clone with another object to access property of base protype functionality

var baseObject = new TeslaModelS();
console.log(baseObject.newfunction());
