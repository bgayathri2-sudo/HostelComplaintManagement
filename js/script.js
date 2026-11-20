
// Get HTML elements
const complaintForm = document.getElementById("complaintForm");
const complaintList = document.getElementById("complaintList");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
// Load complaints from browser storage
let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

// Save complaints to browser storage
function saveComplaints() {
    localStorage.setItem("complaints", JSON.stringify(complaints));
}

// Prevent HTML entered by users from being treated as code
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}

// Handle complaint form submission
complaintForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const roomNumber = document.getElementById("roomNumber").value.trim();
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();

    if (!studentName || !roomNumber || !category || !description) {
        alert("Please fill in all the fields.");
        return;
    }

    // Create a new complaint
    const complaint = {
        id: Date.now(),
        studentName: studentName,
        roomNumber: roomNumber,
        category: category,
        description: description,
        date: new Date().toLocaleDateString(),
        status: "Pending"
    };

    // Add complaint to array
    complaints.push(complaint);

    // Save and display
    saveComplaints();
    displayComplaints();
    updateStatistics();

    // Clear the form
    complaintForm.reset();

    alert("Complaint submitted successfully!");
});

// Display complaints in the table
function displayComplaints() {
    const searchText = searchInput.value.toLowerCase();
const selectedStatus = statusFilter.value;

const filteredComplaints = complaints.filter(function (complaint) {
    const matchesSearch =
        complaint.studentName.toLowerCase().includes(searchText) ||
        complaint.roomNumber.toLowerCase().includes(searchText) ||
        complaint.category.toLowerCase().includes(searchText) ||
        complaint.description.toLowerCase().includes(searchText) ||
        complaint.status.toLowerCase().includes(searchText);

    const matchesStatus =
        selectedStatus === "All" || complaint.status === selectedStatus;

    return matchesSearch && matchesStatus;
});

    complaintList.innerHTML = "";

    if (filteredComplaints.length === 0) {
        complaintList.innerHTML =
            '<tr><td colspan="8">No complaints found.</td></tr>';
        return;
    }

    filteredComplaints.forEach(function (complaint) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${escapeHTML(complaint.id)}</td>
            <td>${escapeHTML(complaint.studentName)}</td>
            <td>${escapeHTML(complaint.roomNumber)}</td>
            <td>${escapeHTML(complaint.category)}</td>
            <td>${escapeHTML(complaint.description)}</td>
            <td>${escapeHTML(complaint.date)}</td>

            <td>
                <select class="status-select" data-id="${complaint.id}">
                    <option value="Pending" ${complaint.status === "Pending" ? "selected" : ""}>Pending</option>
                    <option value="In Progress" ${complaint.status === "In Progress" ? "selected" : ""}>In Progress</option>
                    <option value="Resolved" ${complaint.status === "Resolved" ? "selected" : ""}>Resolved</option>
                </select>
            </td>

            <td>
                <button class="delete-btn" data-id="${complaint.id}">
                    Delete
                </button>
            </td>
        `;

        complaintList.appendChild(row);
    });
}

// Update complaint status or delete a complaint
complaintList.addEventListener("change", function (event) {
    if (event.target.classList.contains("status-select")) {
        const id = Number(event.target.dataset.id);
        const complaint = complaints.find(function (item) {
            return item.id === id;
        });

        if (complaint) {
            complaint.status = event.target.value;
            saveComplaints();
            displayComplaints();
            updateStatistics();
        }
    }
});

complaintList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const id = Number(event.target.dataset.id);

        if (confirm("Are you sure you want to delete this complaint?")) {
            complaints = complaints.filter(function (complaint) {
                return complaint.id !== id;
            });

            saveComplaints();
            displayComplaints();
            updateStatistics();
        }
    }
});

// Search complaints
searchInput.addEventListener("input", displayComplaints);
statusFilter.addEventListener("change", displayComplaints);
// Update dashboard statistics
function updateStatistics() {
    const total = complaints.length;

    const pending = complaints.filter(function (complaint) {
        return complaint.status === "Pending";
    }).length;

    const progress = complaints.filter(function (complaint) {
        return complaint.status === "In Progress";
    }).length;

    const resolved = complaints.filter(function (complaint) {
        return complaint.status === "Resolved";
    }).length;

    document.getElementById("totalCount").textContent = total;
    document.getElementById("pendingCount").textContent = pending;
    document.getElementById("progressCount").textContent = progress;
    document.getElementById("resolvedCount").textContent = resolved;
}

// Display saved complaints when page loads
displayComplaints();
updateStatistics();
