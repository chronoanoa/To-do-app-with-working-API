const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());          // Allows your frontend website to talk to this API
app.use(express.json());  // Allows the API to read JSON data sent by the user
app.use(express.static('public')); // <--- ADD THIS EXACT LINE HERE!


// Temporary Database (resets when server restarts)
let todos = [
    { id: 1, text: "Learn how to build APIs", completed: true },
    { id: 2, text: "Connect frontend to backend", completed: false }
];

// 1. GET ALL TODOS (Read)
// Frontend uses this to load the list on the screen
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// 2. CREATE A NEW TODO (Create)
// Triggered when user types a task and clicks "Add"
app.post('/api/todos', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Task text is required" });
    }

    const newTodo = {
        id: Date.now(), // Creates a unique ID using the timestamp
        text: text,
        completed: false // New tasks start as uncompleted
    };

    todos.push(newTodo);
    res.status(201).json(newTodo); // 201 = Created successfully
});

// 3. TOGGLE COMPLETED STATUS (Update)
// Triggered when user clicks the checkbox next to a task
app.put('/api/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return res.status(404).json({ error: "Task not found" });
    }

    // Toggle the true/false status
    todo.completed = !todo.completed;
    
    res.json({ message: "Task updated status", todo });
});

// 4. DELETE A TODO (Delete)
// Triggered when user clicks the "X" or "Delete" button
app.delete('/api/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const initialLength = todos.length;

    todos = todos.filter(t => t.id !== todoId);

    if (todos.length === initialLength) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 To-Do API is running on http://localhost:${PORT}`);
});
