const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const deleteAllBtn = document.getElementById("deleteAllBtn");

addTaskBtn.addEventListener("click", addTask);
deleteAllBtn.addEventListener("click", deleteAllTasks);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="completeBtn">Complete</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `;

  // Complete task functionality
  li.querySelector(".completeBtn").addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Delete task functionality
  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteAllTasks() {
  taskList.innerHTML = "";
}
