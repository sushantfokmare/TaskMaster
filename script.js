document.getElementById('add-task-btn').addEventListener('click', () => {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const deadline = document.getElementById('task-deadline').value;
    const priority = document.getElementById('task-priority').value;

    if (title.trim() === '') {
        alert('Task title is required!');
        return;
    }

    const task = document.createElement('div');
    task.className = `task priority-${priority.toLowerCase()}`;
    task.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <p>Deadline: ${deadline}</p>
        <p>Priority: ${priority}</p>
        <button class="delete-task">Delete</button>
    `;

    task.querySelector('.delete-task').addEventListener('click', () => {
        task.remove();
    });

    document.getElementById('task-list').appendChild(task);

    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-priority').value = 'Medium';
});
