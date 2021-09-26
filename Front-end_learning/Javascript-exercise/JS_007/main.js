// how to selecting things from the Dom

// alert(1);
// 彈出提示




/* Single element */
// querySelector = single element selector

console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));


// Multiple element
// console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));


const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));



const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hi</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';


const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#cecece';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Done</h1>';
});

