
let form = document.querySelector('form');
let newTask = document.querySelector('#data');
let todoUL = document.querySelector('#item');
let completeUL = document.querySelector('#CompleteTask ul');

let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event){
    event.preventDefault();

    let listItem = createTask(newTask.value);

    todoUL.appendChild(listItem);

    newTask.value = "";

    bindInCompleteItems(listItem,completeTask);
}

let completeTask = function(){
    let listItem = this.parentNode;
    let button = document.createElement('button');
    button.className = "delete";
    button.innerText = 'Delete';
    
    listItem.appendChild(button);
    

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUL.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
    listItem = this.parentNode;
    listItem.remove();
}

let bindCompleteItems = function(taskItem, deleteButton){
    let deleteBtn = taskItem.querySelector('.delete');

    deleteBtn.onclick = deleteButton;
}

let bindInCompleteItems = function(taskItem,checkboxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');

    checkBox.onchange = checkboxClick;

}

for(let i=0; i<todoUL.children.length; i++){
    bindInCompleteItems(todoUL.children[i], completeTask);
}

for(let i=0; i<completeUL.children.length; i++){
    bindCompleteItems(completeUL.children[i],deleteTask);
}

form.addEventListener('submit', addTask);