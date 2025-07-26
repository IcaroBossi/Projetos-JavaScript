// To-Do List

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
            input.focus();
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.textContent = text;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            list.removeChild(li);
        };

        li.appendChild(removeBtn);
        list.appendChild(li);
    }
});
