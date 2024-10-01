document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("task-input");
  const dateInput = document.getElementById("date-input");
  const timeInput = document.getElementById("time-input");

  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;
  const taskTime = timeInput.value;

  if (!taskText) {
    alert("Please enter a task");
    return;
  }

  const taskList = document.getElementById("task-list");

  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <span class="task-text">${taskText} ${taskDate ? ` - ${taskDate}` : ""} ${taskTime ? ` - ${taskTime}` : ""}</span>
    <div class="task-buttons">
      <button class="complete-btn">Complete</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  taskList.appendChild(listItem);

  taskInput.value = "";
  dateInput.value = "";
  timeInput.value = "";

  const completeBtn = listItem.querySelector(".complete-btn");
  const editBtn = listItem.querySelector(".edit-btn");
  const deleteBtn = listItem.querySelector(".delete-btn");

  completeBtn.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

  editBtn.addEventListener("click", () => {
    taskInput.value = taskText;
    dateInput.value = taskDate;
    timeInput.value = taskTime;
    taskList.removeChild(listItem);
  });

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(listItem);
  });
}
