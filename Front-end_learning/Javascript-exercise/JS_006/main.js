// Constructor function

// new Date (當地時區)

function Person(firstName, lastName, dob, brdy) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.brdy = new Date(brdy);
}

Person.prototype.getBirthYear = function() {
    return this.brdy.getUTCFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}


// Instantiate odject
const person1 = new Person('May', 'Bobo', '6006-3299', '4-3-1990');
const person2 = new Person('Mary', 'Smith', '6006-3200', '3-6-1970');

console.log(person2.brdy);
console.log(person1.getFullName());


//prototypes

console.log(person2.getFullName());
// output: Mary Smith (firstName + lastName) line: 13
console.log(person1);



// Class
class Person_exampl2 {
    constructor(firstName, lastName, dob, brdy) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.brdy = new Date(brdy);
    }

    getBirthYear() {
        return this.brdy.getUTCFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person_ex_1 = new Person_exampl2('May', 'Bobo', '6006-3299', '4-3-1990');
const person_ex_2 = new Person_exampl2('Mary', 'Smith', '6006-3200', '3-6-1970');


//prototypes

console.log(person_ex_2.getFullName());
// output: Mary Smith (firstName + lastName) line: 13
console.log(person_ex_1);
