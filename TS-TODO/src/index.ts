/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// import confetti from 'canvas-confetti';

// confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

/////////////////////////////////////

import { v4 as uuidV4 } from "uuid"
console.log(uuidV4());

type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLDataListElement>("#list");
const form = document.querySelector("#new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task");

const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

form?.addEventListener('submit', e => {
  e.preventDefault();

  if(input?.value == "" || input?.value == null) return

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  tasks.push(newTask)
  saveTasks();

  addListItem(newTask)
  input.value = ""
})

function addListItem(task: Task) {

  const item = document.createElement("li")
  const label= document.createElement("label")
  const checkbox = document.createElement("input")
  

  checkbox.addEventListener("change", () => {
    console.log("Checkbox changed");
    task.completed = checkbox.checked
    saveTasks();
  });

  //sets the type of the input element to "checkbox"
  checkbox.type =  "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}

// It is responsible for saving the current state of tasks to the browser's local storage
function saveTasks() {
  
  // JSON.stringify converts the tasks array into a JSON string
  localStorage.setItem("Tasks", JSON.stringify(tasks))
}

//responsible for retrieving the saved tasks from the browser's local storage
function loadTasks(): Task[] {

  const taskJSON = localStorage.getItem("Tasks")
  
  if(taskJSON == null) return []
  //JSON.parse converts the JSON string retrieved from local storage back into a JavaScript object
  return JSON.parse(taskJSON)
}