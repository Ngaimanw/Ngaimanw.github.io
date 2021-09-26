// arrays - variables that hold multiple valuse

const fruits = ['apples', 'banana', 'orange'];

fruits[2] = 'watermelon';

fruits.push('mangos');
// if you want to add something at the end

fruits.unshift('strawberries');

console.log(Array.isArray(fruits));
// if you want to check is this Array (Array.isArray(what you want to check))

console.log(Array.isArray(1));

console.log(fruits);