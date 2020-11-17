var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");
var createTaskHandlter = function(event) {
    event.preventDefault();
    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item"; 
    listItemEL.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEL);
    console.log(event);
}

formEl.addEventListener("submit", createTaskHandlter)
