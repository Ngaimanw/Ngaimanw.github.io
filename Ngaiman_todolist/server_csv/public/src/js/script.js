// update : *2021/8/20 *ver 1 *task : create script.js and add function setting

// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");



inputBox.onkeyup = ()=> {
    let userData = inputBox.value; // getting user entered value
    if(userData.trim() != 0) { //if user values aren't only spaces
        addBtn.classList.add("active"); //active the add button
    } else {
        addBtn.classList.remove("active"); //unactive the add button
    }
}

showTasks (); //啟動 showTasks function

// if user click on the add button 
// Task 5 - Adding Tasks

addBtn.onclick = ()=> {
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null) {
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push("Hello world!");
    localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json stringinto a json string
    showTasks (); //啟動 showTasks function


}

function showTasks (){
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localStorge
    if(getLocalStorage == null){ // if localStrage is null (當沒有輸入任何文字)
        listArr = []; //創建 blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object()
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length; // passing the length value in pendingNumb ()
    if(listArr.length > 0){ // if array length is greater than 0
        deleteAllBtn.classList.add("active"); //active the clearall button
    }else{
        deleteAllBtn.classList.remove("active"); // unactive the clearall button
    }

    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag = `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; // adding new li tag inside ul tag
    inputBox.Value = ""; // 輸入文字add Task後會清空輸入位置 once task added leave the input field blank
}

//  delete task function

function deleteTask(){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage); 
    listArr.splice(index, 1); // delete or remove the particular indexed li
    // after remove the li again update the local storage
    localStorage.setItem("New Todo", JOSN.stringify(listArr)); // transforming js object into a json string
    showTasks (); //啟動 showTasks function
    addBtn.classList.remove("active"); //unactive the add button
}


// delete all tasks function

deleteAllBtn.onclick = ()=>{
    listArr = []; //empty an array
    // after delete all task again update the local storage
    localStorage.setItem("New Todo", JOSN.stringify(listArr)); // transforming js object into a json string
    showTasks (); //啟動 showTasks function   
}

