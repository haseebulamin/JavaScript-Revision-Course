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


  const todoInput = document.querySelector("#todoInput");
    const addButton = document.querySelector("#addButton");
    const todoList = document.querySelector("#todoList");

    addButton.addEventListener("click", () => {
      const task = todoInput.value.trim();
      if (task) {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          listItem.remove();
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = "";
      }
    });