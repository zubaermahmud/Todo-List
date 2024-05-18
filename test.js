const todoinput = document.getElementById("todoinput");
const TodoBtn = document.getElementById("TodoBtn");
const todoList = document.getElementById("todoList");
const clr =document.getElementById("clr");
TodoBtn.addEventListener("click", addTodo);
clr.addEventListener('click', clearAll);
function clearAll() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}
function addTodo() {
    const todotext = todoinput.value.trim();

    if (todotext !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = todotext;

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.classList.add("link-button");
        
        const editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        editbtn.classList.add("link-button");

        deletebtn.addEventListener("click", () => {
            listItem.remove();
        });
        editbtn.addEventListener("click", () => {
			listItem.textContent='';
            const newtext=prompt("Updated todo:", listItem.textContent);
            if (newtext !== null) {
                listItem.textContent = newtext;
                listItem.appendChild(editbtn);
                listItem.appendChild(deletebtn);
            }
        });

        listItem.appendChild(editbtn);
        listItem.appendChild(deletebtn);
        todoList.appendChild(listItem);

        todoinput.value = "";
    } else {
        alert('Please enter a task.');
    }
    return;
}
