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
            </div>` 
         );
    });
}


DOMselectors.submit.addEventListener('click', function(){
    addTask()
})

DOMselectors.create.addEventListener('click', function(){
    createCard()
})

console.log(tasks)