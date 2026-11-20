function getTasks() {
    return JSON.parse(localStorage.getItem("studentTasks")) || [];
}

function updateDashboard() {

    let tasks = getTasks();

    let totalTasks = tasks.length;

    let pendingTasks = tasks.filter(
        task => task.status !== "Completed"
    ).length;

    let completedTasks = tasks.filter(
        task => task.status === "Completed"
    ).length;

    // Display task numbers

    document.getElementById("total").innerText =
        totalTasks;

    document.getElementById("pending").innerText =
        pendingTasks;

    document.getElementById("completed").innerText =
        completedTasks;

    // Calculate completion percentage

    let percentage = totalTasks === 0
        ? 0
        : Math.round((completedTasks / totalTasks) * 100);

    document.getElementById("percentage").innerText =
        percentage + "%";

    document.getElementById("progress").style.width =
        percentage + "%";

    // Display recent tasks

    let recent = document.getElementById("recentTasks");

    if (tasks.length === 0) {
        recent.innerHTML = "<p>No tasks added yet.</p>";
        return;
    }

    let recentTasks = tasks.slice(-5).reverse();

    recent.innerHTML = recentTasks.map(task => `
        <div class="recent-task">
            <div>
                <strong>${task.name}</strong>
                <p>${task.date || "No due date"}</p>
            </div>

            <span class="status">
                ${task.status || "Pending"}
            </span>
        </div>
    `).join("");
}

// Update dashboard when page loads

document.addEventListener("DOMContentLoaded", updateDashboard);

