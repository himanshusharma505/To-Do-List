let addBtn = document.getElementById("add-btn");
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

// Add Task
addBtn.addEventListener("click", () => {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${task}
        <button class="delete-btn">Delete</button>
    `;

    // Delete Task
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});
