let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//console.log(secretMessage.length); //output: 24

secretMessage.pop();

// console.log(secretMessage);
//console.log(secretMessage.length); //output: 23

secretMessage.push('to', 'Program'); // adds 'to' &  'Program' elements to the end of an array
//console.log(secretMessage.length); //output: 25

secretMessage.splice(7, 1, 'right');
//console.log(secretMessage);
//console.log(secretMessage.length); //output: 26

secretMessage.shift(secretMessage);

secretMessage.unshift('Programming');
//console.log(secretMessage);

secretMessage.splice(6, 5, 'know');
console.log(secretMessage.join(' '));