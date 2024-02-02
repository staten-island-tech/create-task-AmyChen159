import '../styles/style.css';
import { DOMselectors } from './dom';

const tasks = []
let count = 0;

document.addEventListener('DOMContentLoaded', function() {
    message(); 
});

function addTask(){
    tasks.push(DOMselectors.task.value);
    DOMselectors.task.value = '';
}

/* function createCard(){
    tasks.forEach(task => {
        document.querySelector("#container").insertAdjacentHTML('beforeend',
            `<div id="gallery">
                <h2>${task}</h2>
                <button class="remove">Complete!</button>
            </div>` 
         );
    });
} */

function createCard(){
    for (let i = 0; i < tasks.length; i++){
        const task = tasks[i];
        document.querySelector("#container").insertAdjacentHTML('beforeend',
        `<div id="gallery">
            <h2 class="text">${task}</h2>
            <button class="remove">Complete!</button>
        </div>`)
    }
    remove()
    message()
}

function message(){
    const container = document.querySelector("#container");
    const message = document.querySelector("#message");
    if (container.childElementCount === 0){
        message.textContent = "You currently have no tasks!";
    } else {
        message.textContent = "";
    }
}

function remove(){
    let remove = document.querySelectorAll(".remove")
    remove.forEach((btn) => {
        btn.addEventListener("click", function (){
            this.parentElement.remove()
            message()
            addCount()
        })
    })
}

function clear(){
    tasks.length = 0;
}

function addCount(){
    count++;
    const counter = document.querySelector("#counter")
    counter.textContent =  `You have completed ${count} tasks.`
}

DOMselectors.submit.addEventListener('click', function(){
    addTask()
})

DOMselectors.create.addEventListener('click', function(){
    createCard()
    clear()
})

console.log(tasks)