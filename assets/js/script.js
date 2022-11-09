var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
  event.preventDefault();
  // .value is the objects property
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  // get the value of the dropdowns selected element
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  // send object as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create li element to hold the whole task listItemEl
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task-info and add to list item
  var taskInfoEl = document.createElement("div");
  // Give it a class name
  taskInfoEl.className = "task-info";

  // append data to div we just created
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskNameInput +
    "</h3><span class='task-type'>" +
    taskTypeInput +
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  // append the entire <li> to the parent <ul> tasksToDoEl
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
