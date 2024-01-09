// Implement a task list where tasks can be added and removed dynamically.

const taskList = [];

function displayTask() {
    const content = document.getElementById('display-content');
    content.innerText = '';

    if (taskList.length === 0) {
        content.innerText = 'Task List is empty!';
    } else {
        let taskC = 'Tasks to be completed:';
        for (let i = 0; i < taskList.length; i++) {
            taskC += `\n* ${taskList[i]}`;
        }
        content.innerText = taskC;
    }
}

function addTask() {
    const addContent = document.getElementById('add-task');
    addContent.innerText = '';

    const newTask = prompt('Enter the new Task:\n');
    if (newTask) {
        taskList.push(newTask);
        displayTask();
    }
}

function removeTask() {
    const removeContent = document.getElementById('remove-task');
    removeContent.innerText = '';

    if (taskList.length === 0) {
        removeContent.innerText = 'Task List is empty already, cannot remove task!';
        return;
    }

    const taskNumber = Number(prompt("Enter the number of task you want to remove:"));
    if (taskNumber < 1 || taskNumber > taskList.length || isNaN(taskNumber)) {
        removeContent.innerText = 'Invalid! Task does not exist.';
        return;
    }

    const removedTask = taskList.splice(taskNumber - 1, 1);
    removeContent.innerText = `${removedTask} removed successfully!`;
    displayTask();
}




