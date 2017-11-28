module.exports = function() {
	
	this.setFname = function(fname) {
		this.firstName = fname;
	}
	
	this.setLname = function(lname) {
		this.lastName = lname;
	}

	this.fullName = function() {
		return "First Name: "+this.firstName + "\n"+ "Last name : "+this.lastName;
	}
}