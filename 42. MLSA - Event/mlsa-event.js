console.log("mlsa-event");

const greeting = ()=>{
    console.log("hello gays!")
}

greeting();

let a = 10;

console.log("This is hoisting", a);

document.addEventListener("DOMContentLoaded", () => {
    let title = document.getElementById("title");
    title.style.backgroundColor = "red";
  });

  let b =6;
  let c =6;
  let d =6;

  let e = b+c+d;
  console.log(e);


  // JavaScript code for a simple to-do list application

// Select DOM elements
const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

// Add a new task
addButton.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task) {
    addTask(task);
    todoInput.value = ""; // Clear the input field
  }
});

// Function to add a new task
function addTask(taskText) {
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);
}
