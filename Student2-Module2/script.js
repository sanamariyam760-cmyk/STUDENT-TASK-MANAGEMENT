function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ADD TASK
const taskForm = document.getElementById("taskForm");

if (taskForm) {
    taskForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let tasks = getTasks();

        let task = {
            id: Date.now(),
            name: document.getElementById("taskName").value,
            description: document.getElementById("description").value,
            date: document.getElementById("date").value,
            status: "Pending"
        };

        tasks.push(task);
        saveTasks(tasks);

        alert("Task Added Successfully!");

        window.location.href = "view-task.html";
    });
}

// VIEW TASKS
const taskList = document.getElementById("taskList");

function displayTasks() {
    if (!taskList) return;

    let tasks = getTasks();

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks added yet!</p>";
        return;
    }

    tasks.forEach(function(task) {
        let div = document.createElement("div");
        div.className = "task";

        let name = document.createElement("h3");
        name.textContent = task.name;

        let description = document.createElement("p");
        description.textContent = task.description;

        let date = document.createElement("p");
        date.textContent = "Due Date: " + task.date;

        let status = document.createElement("p");
        status.textContent = "Status: " + task.status;

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "Mark Completed";

        completeBtn.onclick = function() {
            updateStatus(task.id);
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function() {
            deleteTask(task.id);
        };

        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(date);
        div.appendChild(status);
        div.appendChild(completeBtn);
        div.appendChild(deleteBtn);

        taskList.appendChild(div);
    });
}

// UPDATE TASK STATUS
function updateStatus(id) {
    let tasks = getTasks();

    tasks = tasks.map(function(task) {
        if (task.id === id) {
            task.status =
                task.status === "Pending"
                ? "Completed"
                : "Pending";
        }
        return task;
    });

    saveTasks(tasks);
    displayTasks();
}

// DELETE TASK
function deleteTask(id) {
    if (!confirm("Are you sure you want to delete this task?")) {
        return;
    }

    let tasks = getTasks();

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks(tasks);
    displayTasks();
}

displayTasks();

