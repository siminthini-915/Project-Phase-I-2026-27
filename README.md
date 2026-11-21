
# EduCore – Cloud-Based Learning Management System

**Project Name:** EduCore (My LMS)  
**Project Type:** Cloud-Based Learning Management System  
**Technology Stack:** HTML, CSS, JavaScript, Bootstrap 5 and Firebase

---

## 1. About the Project

EduCore is a cloud-based Learning Management System (LMS) designed to make online learning and academic course management easier for students and administrators.

The platform provides a centralized environment where students can register, log in, explore available courses, enroll in courses, access learning content and participate in online assessments.

It also provides an administrative interface through which authorized administrators can manage courses, learning materials, quizzes and student-related activities.

The system uses Firebase services for authentication and cloud-based data management, allowing information to be maintained and accessed through an online backend.

## 2. Project Objectives

The main objectives of EduCore are:

- To provide a centralized platform for online learning.
- To simplify student registration and authentication.
- To implement role-based access for students, administrators and supervisors.
- To allow administrators to create and manage courses.
- To provide students with access to enrolled courses and learning materials.
- To conduct online quizzes and assessments.
- To maintain student enrollment and quiz performance records.
- To improve communication between students and administrators.
- To provide a simple and user-friendly learning environment.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of web pages |
| CSS3 | Styling and page design |
| JavaScript | Application functionality and logic |
| Bootstrap 5.3.3 | Responsive user interface |
| Firebase Authentication | User registration and login |
| Cloud Firestore | Cloud database and application records |
| Firebase Storage | Storage service initialization |
| Firebase SDK 13.0.0 | Integration with Firebase services |
| Visual Studio Code | Development environment |
| Git and GitHub | Source code management and version control |

## 4. Main Features

### 4.1 User Authentication

- Student registration and login.
- Firebase-based authentication.
- User profile creation.
- Role-based redirection after login.
- Access checks for different user roles.
- Logout functionality.

### 4.2 Student Module

Students can:

- Create an account and log in.
- Access the student dashboard.
- Explore available courses.
- View course information.
- Enroll in courses.
- Access enrolled courses and learning content.
- View available quizzes.
- Attempt online quizzes.
- View quiz results.
- Submit doubts and questions.

### 4.3 Administrator Module

Administrators can:

- Access the admin dashboard.
- View course-related information.
- Add and manage courses.
- Edit and delete courses.
- Manage course content and learning materials.
- Create and manage quizzes.
- Add quiz questions and answer options.
- View quiz-related records and results.
- Manage student doubts.

### 4.4 Supervisor Module

The project also includes a supervisor interface with role-based access and user-management functionality.

### 4.5 Online Assessment Module

- Creation and management of quizzes.
- Multiple-choice questions.
- Answer options and correct-answer configuration.
- Student quiz attempts.
- Quiz submission and result records.
- Administrative quiz-result viewing.

### 4.6 Student Doubt Management

Students can submit doubts related to learning, while authorized administrators and supervisors can access the doubt-management interface.

## 5. System Architecture

EduCore follows a client-side web application architecture integrated with Firebase cloud services.

**Frontend Layer:**
- HTML
- CSS
- JavaScript
- Bootstrap

**Backend and Cloud Services:**
- Firebase Authentication
- Cloud Firestore
- Firebase Storage service initialization

**Database Collections Used:**

The application uses the following Firestore collections:

- `users` – User profiles and roles.
- `courses` – Course information.
- `enrollments` – Student course enrollment records.
- `quizzes` – Quiz information and questions.
- `quizAttempts` – Student quiz attempt records.
- `doubts` – Student questions and doubts.

### Application Workflow

1. A user opens the EduCore website.
2. The user registers or logs in.
3. Firebase Authentication handles user authentication.
4. The application retrieves the user's profile and role from Firestore.
5. The user is redirected to the appropriate dashboard.
6. Students access courses, learning content and quizzes.
7. Administrators manage courses, content and assessments.
8. Application records are maintained in Cloud Firestore.

## 6. Project Folder Structure

```text
LMS-Project/
│
├── index.html
├── signup.html
├── login.html
│
├── student-dashboard.html
├── course-details.html
├── student-quizzes.html
├── student-quiz.html
│
├── admin-dashboard.html
├── administrator.html
├── supervisor.html
├── admin-doubts.html
├── admin-quizzes.html
├── admin-quiz-results.html
│
├── manage-content.html
├── manage-quizzes.html
│
├── firebase.js
│
└── css/
    └── style.css
```

## 7. Installation and Setup

Follow these steps to run EduCore locally.

### Prerequisites

- Visual Studio Code
- Google Chrome or another modern web browser
- Internet connection
- Firebase project

### Step 1: Download the Project

Clone the GitHub repository or download the project ZIP file and extract it.

### Step 2: Open in Visual Studio Code

Open Visual Studio Code and select:

`File → Open Folder → LMS-Project`

### Step 3: Configure Firebase

The project uses a Firebase configuration file named `firebase.js`.

Make sure the Firebase project has the required services configured:

- Firebase Authentication
- Cloud Firestore
- Firebase Storage, if required by the enabled application features

### Step 4: Run the Application

Install the Live Server extension in Visual Studio Code.

Open `index.html`, right-click and select:

`Open with Live Server`

The application will open in your default browser.

## 8. Security and Access Management

EduCore implements role-based access checks for different types of users.

The application recognizes the following roles:

- Student
- Admin
- Supervisor

Firebase Authentication manages user identity, while Firestore stores user profiles and role information.

Firestore Security Rules should be configured to protect user records and application data from unauthorized access.

Firebase web configuration values are used by the frontend. Private service-account keys and other confidential credentials must never be committed to GitHub.

## 9. Development Environment

The project was developed using:

- Visual Studio Code
- HTML, CSS and JavaScript
- Bootstrap framework
- Firebase cloud platform
- Google Chrome
- GitHub for source code management

## 10. Future Enhancements

Possible future improvements include:

- Improved learning progress tracking.
- Additional course-management options.
- More assessment features.
- Enhanced student performance analytics.
- Improved notifications.
- Additional learning resources and content.
- Further user-interface improvements.

## 11. Academic Documentation

The repository also maintains supporting academic documents related to the project.

These documents may include:

- Merged Project Report
- Published Research Paper
- Copyright Registration Documents
- Source Code Copyright PDF
- Course Completion Certificates

Refer to the `documentation/` folder for the available documents.

## 12. Project Information

**Project Title:** Cloud-Based Learning Management System (My LMS)  
**Application Name:** EduCore  
**Project Category:** Computer Software  
**Development Technologies:** HTML, CSS, JavaScript, Bootstrap and Firebase

---

**EduCore – Making Online Learning and Course Management Easier.**

# Project-Phase-I-2026-27
All Students should upload Project related all doc and readme as well as requirenment .txt file  along with code and database

