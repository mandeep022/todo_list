const onclick=document.getElementById('addTodo');
const localStrg = localStorage; 
onclick.addEventListener('click',function(){
    let text=document.getElementById('addTodoItem').value;
    if (text){
        addtolist(text);
        document.getElementById('addTodoItem').value='';
    }
});

function finisheditem(){
    let child=this;
    child.style.textDecoration = 'line-through';
    child.addEventListener('click',unfinisheditem);
    function unfinisheditem() {
    if(child.style.textDecoration =='line-through'){
        child.style.textDecoration ='none';
    }
    else{
        child.style.textDecoration ='line-through';
    }
}
}

function deleteitem(){   
	let child=this.parentNode;
	var todos = getToDoItems();
	
	var index = todos.indexOf(child.childNodes[0].nodeValue);
    todos.splice(index, 1);
    localStrg.setItem('todo', JSON.stringify(todos));
    
    let parent=child.parentNode;
    parent.removeChild(child);
	
	
}
function addtolist(access){
    let element=document.createElement('li');
    element.innerText=access;
	element.setAttribute("id", access);
	var todos = getToDoItems();
    todos.push(access);
    localStrg.setItem('todo', JSON.stringify(todos));
	
    let li=document.getElementById('todoList');
    li.appendChild(element);
   let del=document.createElement('button');
    del.style.border='none';
  
    del.classList.add('remove');
    del.innerText='X';
    element.appendChild(del);
    del.addEventListener('click',deleteitem);
    element.addEventListener('click',finisheditem);
}

function getToDoItems() {
    var todos = new Array;
    var todosString = localStrg.getItem('todo');
    if (todosString !== null) {
        todos = JSON.parse(todosString); 
    }
    return todos;
}

function show() {
    var todos = getToDoItems();
    
    for(var i=0; i<todos.length; i++) {
		let element=document.createElement('li');
		element.innerText=todos[i];
		let li=document.getElementById('todoList');
		li.appendChild(element);
		let del=document.createElement('button');
		del.style.border='none';
	  
		del.classList.add('remove');
		del.innerText='X';
		element.appendChild(del);
		del.addEventListener('click',deleteitem);
		element.addEventListener('click',finisheditem);
   
    };
}

