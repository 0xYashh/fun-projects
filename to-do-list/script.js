// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const clearBtn = document.getElementById('clearBtn');
const addTaskBtn = document.getElementById('addTaskBtn');

let totalTasks = 0;
let completedTasks = 0;

// Update the "x/y tasks completed" text
function updateTaskCount() {
  taskCount.textContent = `${completedTasks}/${totalTasks} tasks completed`;
}

// Create a new task item (li) with a checkbox and label
function createTaskElement(taskText) {
  totalTasks++;
  updateTaskCount();
  
  // Create list item
  const li = document.createElement('li');
  
  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  // Create label
  const label = document.createElement('label');
  label.textContent = taskText;
  
  // Listen for checkbox changes to update completed count
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      completedTasks++;
    } else {
      completedTasks--;
    }
    updateTaskCount();
  });
  
  // Assemble the li
  li.appendChild(checkbox);
  li.appendChild(label);
  
  return li;
}

// Add a new task when user presses Enter
addTaskBtn.onclick = function() {
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
      const taskItem = createTaskElement(newTask);
      taskList.appendChild(taskItem);
      taskInput.value = ""; // Clear input
    }
  }
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
      const taskItem = createTaskElement(newTask);
      taskList.appendChild(taskItem);
      taskInput.value = ""; // Clear input
    }
  }
});

// Clear all tasks
clearBtn.addEventListener('click', function() {
  taskList.innerHTML = "";
  totalTasks = 0;
  completedTasks = 0;
  updateTaskCount();
});

// Initialize the task count text
updateTaskCount();
