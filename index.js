// Add task function
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return; // Prevent empty tasks
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';
    attachDeleteEvent(li.querySelector('.delete-btn'));
}

// Attach delete functionality
function attachDeleteEvent(deleteBtn) {
    deleteBtn.addEventListener('click', function() {
        this.parentElement.remove();
    });
}

// Add event listener to the add button
document.getElementById('add-task').addEventListener('click', addTask);

// Optionally, add task on Enter key press
document.getElementById('task-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});
