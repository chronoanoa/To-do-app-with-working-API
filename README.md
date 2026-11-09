# 📝 Full-Stack To-Do List Application

A responsive, modern full-stack web application built with **Node.js/Express** on the backend and native **HTML/CSS/JavaScript** on the frontend. This project demonstrates full **CRUD** (Create, Read, Update, Delete) operations using a decoupled architecture.

---

## 🚀 Features
* **Read (GET):** Instantly fetches and syncs all tasks from the server array upon loading the app.
* **Create (POST):** Seamlessly adds custom new tasks from the input text area to the backend server.
* **Update (PUT):** Click directly on any task text to dynamically toggle its completed status (applies a slick line-through strikeout effect via CSS).
* **Delete (DELETE):** Erase any task permanently from the server memory by clicking its dedicated delete button.

---

## 📁 Project Structure
```text
todo-app/
├── to-do-backend/         # Express API Server (The Brain)
│   ├── server.js          # Main backend server logic and routes
│   └── package.json       # Backend configuration and dependencies
├── to-do-frontend/        # Client UI Webpage (The Interface)
│   ├── index.html         # Structural markup and layout
│   ├── style.css          # Modern slate-indigo styling sheet
│   └── app.js             # API bridge using asynchronous fetch requests
└── .gitignore             # Prevents node_modules from uploading
```

---

## 🛠️ Installation & Setup

To run this application locally, you will need to open **two terminal windows** simultaneously.

### 1. Launch the Backend API
Open your first terminal, navigate to the backend folder, and boot up the server:
```bash
cd to-do-backend
npm install
node server.js
```
*The server will start listening on `http://localhost:3000`.*

### 2. Launch the Frontend UI
Open a second terminal window, navigate to the frontend folder, and host your static files:
```bash
cd to-do-frontend
npx serve .
```
*Alternatively, if using VS Code, click the **"Go Live"** button in the bottom status bar.*

---

## 🧠 Technologies Used
* **Backend:** Node.js, Express.js, CORS
* **Frontend:** Vanilla JavaScript (ES6+ Fetch API), HTML5, Modern CSS3
