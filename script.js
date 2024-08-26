const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById("taskList");

function addTask(){
    const task =document.createElement("li");
    task.classList.add("task");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";

    const taskContent = document.createElement("input");
    taskContent.type = "text";
    taskContent.value = taskInput.value;

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.textContent = "x";

    task.appendChild(taskCheckbox);
    task.appendChild(taskContent);
    task.appendChild(taskDeleteButton);

    taskList.appendChild(task);
}
