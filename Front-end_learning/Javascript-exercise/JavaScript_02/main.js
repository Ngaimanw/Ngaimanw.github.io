const person = {
    firstName: 'Alex',
    lastName: 'Ho',
    age: 30,
    hobbies: ['music', 'read book', 'sleep'],
    address: {
        street: '76 road',
        city: 'Hong Kong',
        state: 'HKSAR',
    }
}

console.log(person.firstName);
console.log(person.address.city);


const { firstName, lastName, address: { city }} = person;

console.log(lastName);

person.contact = '24478175';
// these act can add the contact in person 

console.log(person);
