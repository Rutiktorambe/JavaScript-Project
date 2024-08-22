const box = document.querySelector('.box');
const displayForm = document.querySelector('#disply-form');
const addBtn = document.querySelector('.btn-add');

let totalCount = 0;
let remainingCount = 0;

const updateCounts = () => {
    document.querySelector('.task-total-count span').textContent = String(totalCount).padStart(2, '0');
    document.querySelector('.task-remaining-count span').textContent = String(remainingCount).padStart(2, '0');
};

const addTask_input = () => {
    const inputTitle = document.querySelector('.input-title').value;
    const inputBody = document.querySelector('.input-body').value;

    if (inputTitle === '') {
        alert('Please fill the title fields atleast.');
        return;
    }

    totalCount++;
    remainingCount++;
    updateCounts();

    const taskRemove = document.createElement('button');
    taskRemove.classList.add('task-remove');
    taskRemove.innerHTML = '🗑️';

    const taskNotDone = document.createElement('button');
    taskNotDone.classList.add('task-notdone','visibility');
    taskNotDone.innerHTML = '❌';

    const taskDone = document.createElement('button');
    taskDone.classList.add('task-done');
    taskDone.innerHTML = '✅';

    const taskBtn = document.createElement('div');
    taskBtn.classList.add('task-btn');
    taskBtn.appendChild(taskDone);
    taskBtn.appendChild(taskNotDone);
    taskBtn.appendChild(taskRemove);

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = inputTitle;

    const taskBody = document.createElement('div');
    taskBody.classList.add('task-body');
    taskBody.textContent = inputBody;

    const taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header');
    taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(taskBtn);

    const task = document.createElement('div');
    task.classList.add('task');
    task.appendChild(taskHeader);
    task.appendChild(taskBody);

    taskRemove.addEventListener('click', () => {
        box.removeChild(task);
        totalCount--;
        if (!task.classList.contains('work-done')) {
            remainingCount--;
        }
        updateCounts();
    });

    taskDone.addEventListener('click', () => {
        if (!task.classList.contains('work-done')) {
            task.classList.add('work-done');
            taskNotDone.classList.remove('visibility')
            taskDone.classList.add('visibility');
            remainingCount--;
            updateCounts();
        }
    });

    taskNotDone.addEventListener('click', () => {
        if (task.classList.contains('work-done')) {
            task.classList.remove('work-done');
            taskNotDone.classList.add('visibility')
            taskDone.classList.remove('visibility');


            remainingCount++;
            updateCounts();
        }
    });

    box.appendChild(task);

    // Clear input fields after adding a task
    document.querySelector('.input-title').value = '';
    document.querySelector('.input-body').value = '';

    // Hide the form after adding a task
    displayForm.classList.add('visibility');
};

// Toggle form visibility when clicking "New Task" button
addBtn.addEventListener('click', () => {
    displayForm.classList.toggle('visibility');
});
