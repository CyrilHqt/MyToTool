
// Add elements in the task list

document.addEventListener('DOMContentLoaded', function() {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value;
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'task-item';
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="delete-btn">Supprimer</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.closest('.task-item');
            listItem.remove();
        }
    });
});

// Add new list

document.addEventListener('DOMContentLoaded', function() {
    const newListBtn = document.getElementById('new-list-btn');
    const listsContainer = document.getElementById('task-container');
    let listCount = 0;

    newListBtn.addEventListener('click', function() {
        listCount++;
        const newList = createTodoList(listCount);
        listsContainer.appendChild(newList);
    });

    function createTodoList(count) {
        const todoList = document.createElement('div');
        todoList.className = 'todo-list';

        const title = document.createElement('h2');
        title.textContent = 'ToTool ' + count;
        todoList.innerHTML = `
        <div id="task-container">
        <div class="original-container">
            <input type="text" id="task-input" placeholder="Ajouter une tâche">
            <button id="add-task-btn">Ajouter</button>
            <ul id="task-list"></ul>
        </div>
    </div>
            `;
        const list = document.createElement('ul');
        todoList.appendChild(list);

        return todoList;
    }
});