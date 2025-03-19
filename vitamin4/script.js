/**
 * Question 1
 */
/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  sidebarButton.addEventListener("click", () => {
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      // Close the sidebar
      sidebar.classList.remove("opened");
      sidebarButton.textContent = "›"; // Change button text to indicate opening
    } else {
      // Open the sidebar
      sidebar.classList.add("opened");
      sidebarButton.textContent = "‹"; // Change button text to indicate closing
    }
  });
};


/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  addTodoButton.addEventListener("click", () => {
    const taskText = taskName.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    todoListUl.appendChild(listItem);

    taskName.value = ""; // Clear input after adding
  });
};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");

  const updateMessage = () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    message.textContent = `Hello, ${firstName} ${lastName}!`;
  };

  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);
};

/**
 * Wait for the DOM to fully load
 */
document.addEventListener("DOMContentLoaded", () => {
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
