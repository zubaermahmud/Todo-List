const todoinput =document.getElementById("todoinput");
const TodoBtn =document.getElementById("TodoBtn");
const todoList=document.getElementById("todoList");

Todobtn.addEventListener("click",addTodo);

function addTodo(){
	const todotext=todoinput.value.trim();
	
	if(todotext!="")
	{
		const listItem= document.createElement('li');
		listItem.textContent=todotext;
		
		const deletebtn=document.createElement('Button');
		const editbtn=document.createElement('Button');
		deletebtn.addEventListener('click',()=>{
			todoList.removeChild(listItem);
		});
		editbtn.addEventListener('click',()=>{
			const newtext;
			newtext=prompt("Updated todo:");
			listItem.textContent=newtext;
		});
		listItem.appendChild(editbtn);
		listItem.appendChild(deletebtn);
		todoList.appendChild(listItem);
		
		todoinput.value="";
	}
	else
	{
		alert('Please enter a task.');
		return;
	}
}