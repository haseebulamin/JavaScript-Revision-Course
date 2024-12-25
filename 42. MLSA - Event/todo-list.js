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