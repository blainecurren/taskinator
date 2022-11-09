var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();

  // .value is the objects property
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  // get the value of the dropdowns selected element
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
