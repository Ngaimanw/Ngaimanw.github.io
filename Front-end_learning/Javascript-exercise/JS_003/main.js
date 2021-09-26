const todos = [
    {
        id: 1,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Buy new shoes',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Learn JavaScript',
        isCompleted: false
    },
];

console.log(todos[1].text);
// will call the text, that mean output 'Buy new shoes'

const todoJSON = JSON.stringify(todos);
// converts(轉換)a JavaScript value to a JavaScript object notation(對象) (JSON) string
console.log(todoJSON);


// for 
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While 
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// If you haven't written i++, the while loop will never end.

// Arrays


const todoslist = [
    {
        id: 1,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Buy new shoes',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Learn JavaScript',
        isCompleted: false
    },
];

for(let i = 0; i < todoslist.length; i++) {
    console.log(todoslist[i].text);
}

for(let todo of todoslist) {
    console.log(todo);
}

// high order array methods

const todoslists = [
    {
        id: 1,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Buy new shoes',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Learn JavaScript again',
        isCompleted: false
    },
];

// forEach, map, filter
todoslists.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todoslists.map(function(todo) {
    return todo.text;
});

console.log(todoText);
// only output todoslists.text string format.


const todoCompleted = todoslists.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})


// 只顯示ture的isCompleted values

console.log(todoCompleted);