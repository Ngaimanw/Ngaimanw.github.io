let userName = 'Jane';

if (userName) {
    console.log('Hello, Jane!');
} else {
    console.log('Hello');
}

let userQuestion = 'Magic Eight Ball';
console.log('What do Jane want know with ' + userQuestion + '?');

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = 2;

switch (eightBall) {
    case 0 :
        console.log('It is certain');
        break;
    case 1 :
        console.log('It is decidedly so');
        break;
    case 2 :
        console.log('Reply hazy try again');
        break;
    case 3 :
        console.log('Cannot predict now');
        break;
    case 4 :
        console.log('Do not count on it');
        break;
    case 5 :
        console.log('My sources say no');
        break;
    case 6 :
        console.log('Outlook not so good');
        break;
    case 7 :
        console.log('signs point to yes');
        break;
} //output : It is decidedly so

console.log(eightBall);