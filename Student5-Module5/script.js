// Sample tasks for testing
var tasks = [
    {
        name: "Complete Java Assignment",
        status: "Pending"
    },
    {
        name: "Prepare Project Report",
        status: "Completed"
    },
    {
        name: "Study for Exam",
        status: "Pending"
    },
    {
        name: "Complete HTML Project",
        status: "Completed"
    },
    {
        name: "Prepare Seminar",
        status: "Pending"
    }
];

// Display tasks
function displayTasks(taskArray) {

    var list = document.getElementById("taskList");

    list.innerHTML = "";

    if (taskArray.length === 0) {

        list.innerHTML =
            "<p class='no-result'>No matching tasks found!</p>";

        return;
    }

    for (var i = 0; i < taskArray.length; i++) {

        var card = document.createElement("div");
        card.className = "task";

        var heading = document.createElement("h3");
        heading.textContent = taskArray[i].name;

        var status = document.createElement("p");
        status.textContent =
            "Status: " + taskArray[i].status;

        status.className =
            taskArray[i].status.toLowerCase();

        card.appendChild(heading);
        card.appendChild(status);

        list.appendChild(card);
    }
}

// Search and Filter
function filterTasks() {

    var searchValue =
        document.getElementById("searchInput")
        .value.toLowerCase();

    var selectedStatus =
        document.getElementById("statusFilter").value;

    var filteredTasks = tasks.filter(function(task) {

        var matchesName =
            task.name.toLowerCase().includes(searchValue);

        var matchesStatus =
            selectedStatus === "All" ||
            task.status === selectedStatus;

        return matchesName && matchesStatus;
    });

    displayTasks(filteredTasks);
}

// Reset Search and Filter
function resetFilters() {

    document.getElementById("searchInput").value = "";

    document.getElementById("statusFilter").value = "All";

    displayTasks(tasks);
}

// Next Page - Dashboard
function goToDashboard() {

    window.location.href = "dashboard.html";

}

// Load tasks when page opens
displayTasks(tasks);
