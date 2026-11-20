// Sample tasks for testing this module
var tasks = [
    {
        name: "Complete Java Assignment",
        collaborator: "Amal",
        date: "2026-11-25"
    },
    {
        name: "Prepare Project Report",
        collaborator: "Sana",
        date: "2026-11-28"
    },
    {
        name: "Study for Exam",
        collaborator: "Kavi",
        date: "2026-11-30"
    }
];

// Display all tasks
function manageTasks() {

    var list = document.getElementById("taskList");

    list.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {

        var card = document.createElement("div");
        card.className = "task";

        var heading = document.createElement("h3");
        heading.textContent = tasks[i].name;

        var collaborator = document.createElement("p");
        collaborator.textContent =
            "Collaborator: " + tasks[i].collaborator;

        var date = document.createElement("p");
        date.textContent = "Due Date: " + tasks[i].date;

        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.className = "update";
        updateButton.onclick = function(index) {
            return function() {
                updateTask(index);
            };
        }(i);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        deleteButton.onclick = function(index) {
            return function() {
                deleteTask(index);
            };
        }(i);

        card.appendChild(heading);
        card.appendChild(collaborator);
        card.appendChild(date);
        card.appendChild(updateButton);
        card.appendChild(deleteButton);

        list.appendChild(card);
    }
}

// Update Task
function updateTask(index) {

    var newName = prompt(
        "Enter updated task name:",
        tasks[index].name
    );

    if (newName === null || newName.trim() === "") {
        return;
    }

    var newCollaborator = prompt(
        "Enter collaborator name:",
        tasks[index].collaborator
    );

    if (newCollaborator === null ||
        newCollaborator.trim() === "") {
        return;
    }

    var newDate = prompt(
        "Enter new due date (YYYY-MM-DD):",
        tasks[index].date
    );

    if (newDate === null || newDate.trim() === "") {
        return;
    }

    tasks[index].name = newName.trim();
    tasks[index].collaborator = newCollaborator.trim();
    tasks[index].date = newDate.trim();

    manageTasks();

    alert("Task Updated Successfully!");
}

// Delete Task
function deleteTask(index) {

    var confirmDelete = confirm(
        "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {

        tasks.splice(index, 1);

        manageTasks();

        alert("Task Deleted Successfully!");
    }
}

// Load tasks when page opens
manageTasks();

