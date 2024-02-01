import '../styles/style.css';
import { DOMselectors } from './dom';

const tasks = []

function addTask(){
    tasks.push(DOMselectors.task.value);
    DOMselectors.task.value = '';
}

function createCard(){
    tasks.forEach(task => {
        document.querySelector("#container").insertAdjacentHTML('beforeend',
            `<div id="gallery">
                <h2>${task}</h2>
                <button class="remove">Complete!</button>
            </div>` 
         );
    });
}

function remove(){
    let remove = document.querySelectorAll(".remove")
    remove.forEach((btn) => {
        btn.addEventListener("click", function (){
            createCard.target.parentElement.remove()
            adsaf completedTask++
        })
    })
}

function clear(){
    tasks.length = 0;
}

function count(){
    
}

DOMselectors.submit.addEventListener('click', function(){
    addTask()
})

DOMselectors.create.addEventListener('click', function(){
    createCard()
    clear()
})

console.log(tasks)