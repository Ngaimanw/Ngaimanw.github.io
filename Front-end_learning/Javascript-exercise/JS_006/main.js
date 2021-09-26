// Constructor function

// new Date (當地時區)

function Person(firstName, lastName, dob, brdy) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.brdy = new Date(brdy);
    this.getBirthYear = function() {
        return this.brdy.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate odject
const person1 = new Person('May', 'Bobo', '6006-3299', '4-3-1990');
const person2 = new Person('Mary', 'Smith', '6006-3200', '3-6-1970');

console.log(person2.brdy);
console.log(person1.getFullName());


//prototypes
console.log(person1);