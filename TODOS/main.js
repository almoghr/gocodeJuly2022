const todoInput = document.createElement("input");
const tabContainer = document.createElement("div");
const todosTab = document.createElement("button");
const doneTab = document.createElement("button");
const todosContainer = document.createElement("div");
const colorSwitcher = document.createElement("button");

const unDoneTodos = [];
const doneTodos = [];

let isPink = true;

todosTab.innerText = "TODOS";
doneTab.innerText = "DONE";
colorSwitcher.innerText = "toggle color";

const renderTodos = (whichTab) => {
  console.log(whichTab);
  const currentTodosArr = whichTab === "unDone" ? unDoneTodos : doneTodos;

  todosContainer.innerHTML = "";

  currentTodosArr.forEach((todo) => {
    console.log(todo);
    const todoContainer = document.createElement("div");
    const title = document.createElement("span");
    const actionButtonsContainer = document.createElement("div");
    const removeBtn = document.createElement("button");
    const doneBtn = document.createElement("button");

    if (whichTab === "unDone") {
      doneBtn.innerText = "DONE";
      doneBtn.addEventListener("click", (e) => {
        const todoIndex = currentTodosArr.findIndex((td) => td.id === todo.id);
        const completedTodo = currentTodosArr.splice(todoIndex, 1);
        doneTodos.push(completedTodo[0]);
        renderTodos("unDone");
      });
    }

    title.innerText = todo.title;
    removeBtn.innerText = "REMOVE";

    todoContainer.classList.add("todo-container");

    removeBtn.addEventListener("click", () => {
      const todoIndex = currentTodosArr.findIndex((td) => td.id === todo.id);
      currentTodosArr.splice(todoIndex, 1);
      todoContainer.parentElement.removeChild(todoContainer);
    });

    whichTab === "unDone"
      ? actionButtonsContainer.append(removeBtn, doneBtn)
      : actionButtonsContainer.appendChild(removeBtn);

    todoContainer.append(title, actionButtonsContainer);

    todosContainer.appendChild(todoContainer);
  });
};

todoInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    console.log("check");
    if (!todoInput.value) {
      return;
    }
    const newTodo = { title: todoInput.value, id: Date.now() };
    unDoneTodos.push(newTodo);
    console.log(unDoneTodos);
    renderTodos("unDone");
    todoInput.value = "";
  }
});

colorSwitcher.addEventListener("click", () => {
  document.body.style.backgroundColor = isPink ? "yellow" : "pink";
  colorSwitcher.innerText = isPink ? "switch to pink" : "switch to yellow";

  isPink = !isPink;
});

todosTab.addEventListener("click", () => {
  renderTodos("unDone");
});
doneTab.addEventListener("click", () => {
  renderTodos();
});

tabContainer.append(todosTab, doneTab);
document.body.append(todoInput, tabContainer, todosContainer, colorSwitcher);
