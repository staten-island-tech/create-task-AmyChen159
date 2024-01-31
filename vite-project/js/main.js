import '../styles/style.css';
import { DOMselectors } from './dom';

const tasks = []

function addTask(){
    tasks.push(DOMselectors.task.value)
}

function createCard(){

}

function clear(){
    DOMselectors.task.innerHTML = "";
}

DOMselectors.submit.addEventListener('click', function(){
    addTask()
})

DOMselectors.create.addEventListener('click', function(){
    createCard()
})

console.log(tasks)