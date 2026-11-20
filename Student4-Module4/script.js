// Store priority tasks
var tasks = [];

// Add a new task
function addPriorityTask() {

    var name = document.getElementById("taskName").value;
    var priority = document.getElementById("priority").value;

    if (name.trim() === "" || priority === "") {
        alert("Please enter task name and select priority");
        return;
    }

    tasks.push({
        name: name.trim(),
        priority: priority
    });

    document.getElementById("taskName").value = "";
    document.getElementById("priority").value = "";

    displayTasks();

    alert("Task Added Successfully!");
}

// Display priority tasks
function displayTasks() {

    var list = document.getElementById("taskList");

    list.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {

        var card = document.createElement("div");
        card.className = "task";

        var heading = document.createElement("h3");
        heading.textContent = tasks[i].name;

        var priorityText = document.createElement("p");
        priorityText.textContent =
            "Priority: " + tasks[i].priority;

        priorityText.className =
            tasks[i].priority.toLowerCase();

        card.appendChild(heading);
        card.appendChild(priorityText);

        list.appendChild(card);
    }
}

