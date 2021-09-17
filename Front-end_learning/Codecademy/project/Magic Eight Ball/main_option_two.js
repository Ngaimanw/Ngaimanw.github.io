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

let eightBall = 1;

switch (eightBall) {
    case 0 :
        eightBall = 'It is certain';
        break;
    case 1 :
        eightBall = 'It is decidedly so';
        break;
    case 2 :
        eightBall = 'Reply hazy try again';
        break;
    case 3 :
        eightBall = 'Cannot predict now';
        break;
    case 4 :
        eightBall = 'Do not count on it';
        break;
    case 5 :
        eightBall = 'My sources say no';
        break;
    case 6 :
        eightBall = 'Outlook not so good';
        break;
    case 7 :
        eightBall = 'signs point to yes';
        break;
}  //output : It is decidedly so

console.log(eightBall);