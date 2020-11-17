var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");
var createTaskHandlter = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item
    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class= 'task-type'>" + taskTypeInput + "</span>";

    listItemEL.appendChild(taskInfoEl);

    // add entire list item to list
    taskToDoEl.appendChild(listItemEL);
}

formEl.addEventListener("submit", createTaskHandlter)
