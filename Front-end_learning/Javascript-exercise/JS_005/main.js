const x = 9;
const color = x > 10 ? 'red' : 'blue';


console.log(color);

// switch

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}


function addNums(num1, num2) {
    console.log(num1 * num2);
}

addNums(2, 4);

function addNum2(num1 = 2, num2 = 3){
    console.log(num1 + num2);
}

addNum2();


// return 

function addNum3(num1 = 1, num2 = 1){
    return num1 + num2;
}

console.log(addNum3(6, 6));

const addNum4 = (num1 = 6, num2 = 7) => num1 + num2;
// output : 12
console.log(addNum4(10, 12));


const addNum5 = num1 => num1 + 5;
console.log(addNum5(6));
// output: 11;


