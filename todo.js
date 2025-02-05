// Select DOM elements
const todoInput = document.querySelector('.todo-input');
const firstNameInput = document.querySelector('.firstname');
const collegeInput = document.querySelector('.college');
const ageInput = document.querySelector('.age');
const todoSubmit = document.querySelector('.todo-submit');
const todoList = document.querySelector('.todo-list');
const filter = document.getElementById('filter');

// Add a new task
todoSubmit.addEventListener('click', () => {
  const taskName = todoInput.value.trim();
  const firstName = firstNameInput.value.trim();
  const college = collegeInput.value.trim();
  const age = ageInput.value.trim();

  if (taskName && firstName && college && age) {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classname = 'list-item'
    listItem.className = 'todo-item';
    listItem.setAttribute('data-college', college.toLowerCase());
    listItem.innerHTML = `
      <span><strong>Task:</strong> ${taskName}</span>
      <span><strong>Name:</strong> ${firstName}</span>
      <span><strong>College:</strong> ${college}</span>
      <span><strong>Age:</strong> ${age}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Add delete functionality
    listItem.querySelector('.delete-btn').addEventListener('click', () => {
      todoList.removeChild(listItem);
    });

    // Append the list item to the todo list
    todoList.appendChild(listItem);

    // Clear input fields
    todoInput.value = '';
    firstNameInput.value = '';
    collegeInput.value = '';
    ageInput.value = '';
  } else {
    alert('Please fill out all fields!');
  }
});

// Filter tasks by college
filter.addEventListener('change', (e) => {
  const filterValue = e.target.value.toLowerCase();
  const tasks = document.querySelectorAll('.todo-item');

  tasks.forEach(task => {
    const college = task.getAttribute('data-college');
    if (filterValue === 'all' || college === filterValue) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
});


