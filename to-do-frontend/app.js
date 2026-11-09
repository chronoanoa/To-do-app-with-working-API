// 1. THE ADDRESS BOOK
// We explicitly tell the frontend exactly where our backend kitchen lives
const API_URL = 'http://localhost:3000/api/todos';

// 2. THE "READ" ACTION: Load and show tasks on the screen
async function fetchTodos() {
    // Step A: Send a GET request to the backend and wait for the response
    const response = await fetch(API_URL);
    // Step B: Turn that raw response into a readable JavaScript list (array)
    const todos = await response.json();
    
    // Step C: Grab the <ul> element from your index.html
    const listElement = document.getElementById('todo-list');
    listElement.innerHTML = ''; // Wipe it clean so we don't duplicate tasks
    
    // Step D: Loop through every single todo from the backend and build the HTML
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="todo-text ${todo.completed ? 'completed' : ''}" onclick="toggleTodo(${todo.id})">
                ${todo.text}
            </span>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        listElement.appendChild(li); // Stick it onto the webpage
    });
}

// 3. THE "CREATE" ACTION: Send what the user typed to the backend
async function addTodo() {
    const input = document.getElementById('todo-input'); // Grab the input box
    const text = input.value.trim(); // Get the text typed by the user
    
    if (!text) return; // If the input is empty, don't do anything!

    // Step A: Shoot a POST request over to the backend with the new text
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text }) // Convert our JS text into a JSON string packet
    });

    input.value = ''; // Clear out the input box so it's ready for the next task
    fetchTodos();     // Refresh the screen so the new task appears!
}

// 4. THE "UPDATE" ACTION: Tell the backend to flip the checkbox status
async function toggleTodo(id) {
    // Send a PUT request targeting a specific ID (e.g., http://localhost:3000/api/todos/1)
    await fetch(`${API_URL}/${id}`, { method: 'PUT' });
    fetchTodos(); // Refresh the list to show the strikethrough line
}

// 5. THE "DELETE" ACTION: Tell the backend to erase a task permanently
async function deleteTodo(id) {
    // Send a DELETE request targeting a specific task ID
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTodos(); // Refresh the list so the task disappears
}

// 6. THE ALARM CLOCK: Run this instantly the second the browser loads the page
fetchTodos();
