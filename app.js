"use strict";
// Select all ui elements
const addTodoBtn = document.querySelector(".btn--submit");
const formInput = document.querySelector(".form input");
const todoList = document.querySelector(".todo-list");
// Add event listeners
addTodoBtn.addEventListener("click", (e) => {
  if (formInput.value.trim() !== "") {
    // Create todo elements
    const li = document.createElement("li");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    // Create contents fo todo
    const todoText = document.createTextNode(formInput.value);
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
  e.preventDefault();
});
