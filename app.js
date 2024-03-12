"use strict";
// Select all ui elements
const addTodoBtn = document.querySelector(".btn--submit");
const formInput = document.querySelector(".form input");
const todoList = document.querySelector(".todo-list");
const filterInput = document.querySelector(".filter-input");
// Helper functions
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Main functions of the app
function addTodoToDOM(todo) {
  // Create todo elements
  const li = document.createElement("li");
  const p = document.createElement("p");
  const btn = document.createElement("button");
  // Create contents fo todo
  const todoText = document.createTextNode(capitalize(todo));
  p.append(todoText);
  p.classList.add("todo__item");
  li.append(p);
  // Create remove btn contents
  btn.innerHTML = "&times";
  btn.classList.add("btn", "btn--remove");
  li.append(btn);

  li.classList.add("todo");

  todoList.append(li);

  formInput.value = "";

  addItemToLocalStorage(todo);
}

// Local Storage Functions
function getLocalStorage() {
  let todos;
  if (!localStorage.getItem("todos")) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}
function addItemToLocalStorage(todo) {
  const todos = getLocalStorage();
  todos.push(todo.toLowerCase());
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add event listeners
addTodoBtn.addEventListener("click", (e) => {
  if (formInput.value.trim() !== "") {
    addTodoToDOM(formInput.value);
  }
  e.preventDefault();
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn--remove")) {
    const targetTodo = e.target.parentElement;
    targetTodo.classList.add("drop");
    setTimeout(() => {
      targetTodo.remove();
    }, 400);
  }
});

filterInput.addEventListener("input", (e) => {
  const currentItem = e.target.value.toLowerCase();
  const todos = Array.from(todoList.children);
  for (const todo of todos) {
    if (
      !todo.firstElementChild.textContent.toLowerCase().includes(currentItem)
    ) {
      todo.classList.add("hidden");
    } else {
      todo.classList.remove("hidden");
    }
  }
});
