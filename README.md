# Hostel Complaint Management System

## Project Description
The Hostel Complaint Management System is a simple web application that allows hostel students to submit complaints and enables users to manage and track complaints through their status.

## Problem Statement
Hostel students may face problems related to food, water, electricity, cleanliness, and maintenance. Handling these complaints manually can make tracking and resolving issues difficult. This project provides a simple digital system for recording, searching, and managing hostel complaints.

## Objectives
- Provide an easy way to submit hostel complaints.
- Maintain complaint records.
- Track complaint status.
- Allow searching and filtering complaints.
- Display complaint statistics.

## Features Implemented
- Complaint submission with student name, room number, category, and description.
- Complaint categories such as Food, Water, Electricity, Cleanliness, Maintenance, and Other.
- Complaint search.
- Complaint status management (Pending, In Progress, Resolved).
- Filter complaints by status.
- Delete complaints.
- Dashboard showing total, pending, in-progress, and resolved complaints.
- Store complaint records using browser Local Storage.

## Technology Stack
- HTML5
- CSS3
- JavaScript
- Browser Local Storage
- Git
- GitHub
- Visual Studio Code

## Project Structure
```text
HostelComplaintManagement/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── script.js
└── screenshots/
```

## Prerequisites
- A web browser
- Visual Studio Code (optional, for editing)
- Git (for version control)

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/bgayathri2-sudo/HostelComplaintManagement.git
   ```
2. Open the project folder.
3. Open `index.html` in a web browser.

## How to Run
1. Open the project folder.
2. Launch `index.html` in a web browser.
3. Fill in the complaint form.
4. Click Submit Complaint.
5. View the complaint in the Complaint Records table.
6. Change the status using the status dropdown.
7. Search or filter complaints using the search box and status filter.

## Testing Performed
- Tested complaint submission.
- Tested complaint search.
- Tested complaint status updates.
- Tested complaint deletion.
- Tested complaint status filtering.
- Checked dashboard statistics.

## Git and GitHub
The project is maintained using Git and GitHub.

- Main branch: `main`
- Feature branch: `feature-complaint-management`
- Feature implemented: Complaint Status Filter
- Feature branch was merged into `main`.

## Limitations
- Complaint records are stored in browser Local Storage.
- Data is available only in the same browser on the same device.
- The application does not have a server-side database or user authentication.

## Future Enhancements
- Add student and admin login.
- Use a database for permanent complaint storage.
- Add notifications for complaint status updates.
- Add admin dashboard for complaint assignment.
- Improve interface and mobile responsiveness.

## Team Member Details
- Name: Gayathri B
- Register Number: [Enter your register number]
- Contribution: Project implementation, complaint management features, status filtering, testing, and Git version control.
