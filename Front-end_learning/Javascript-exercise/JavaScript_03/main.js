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