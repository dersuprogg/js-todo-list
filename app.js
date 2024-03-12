"use strict";
// Select all ui elements
const addTodoBtn = document.querySelector(".btn--submit");
const formInput = document.querySelector(".form input");
const todoList = document.querySelector(".todo-list");

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
}

// Add event listeners
addTodoBtn.addEventListener("click", (e) => {
  if (formInput.value.trim() !== "") {
    addTodoToDOM(formInput.value);
  }
  e.preventDefault();
});
