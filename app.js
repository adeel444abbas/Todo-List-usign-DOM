const addTask = document.querySelector(".btn");
const dispalyMessage = document.querySelector(".displayError");

const handleDeleteTask = (li) => {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Task";
  deleteBtn.setAttribute("class", "delBtn");
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    li.remove();
  });
};

const handleList = () => {
  let inputText = document.querySelector("input");
  let userInput = inputText.value;
  dispalyMessage.innerText = "";

  if (userInput) {
    inputText.value = "";
    const myUl = document.querySelector("ul");
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    li.innerText = userInput;
    myUl.appendChild(li);
    li.appendChild(checkBox);

    checkBox.addEventListener("click", () => {
      li.style.color = "green";
      li.style.fontWeight = "bolder";
    });
    handleDeleteTask(li);
  } else {
    dispalyMessage.innerText = "Please enter a Task in the Field";
  }
};

addTask.addEventListener("click", handleList);