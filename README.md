DESCRIPTION: 
           This is my TODO List. This list is created with the help of local Storage variable.
           when you add something to the text field and then if you click on the add button it will add in the list.
           when you click the item in the list then it will strike a line over the text and if you want to delete it
           click on the "X" button.
           
           If you selected the list item and do not want to delete it the again click the selected item to deselect it.
           
LOCAL STORAGE:
           I declare a local storage variable globally.
           
            <-- const localStrg = localStorage; -->
            
            For delete Function the localStorage works as:
            
            <-- 	var index = todos.indexOf(child.childNodes[0].nodeValue);
                    todos.splice(index, 1);
                    localStrg.setItem('todo', JSON.stringify(todos)); -->
   
            For Add Function It works like: 
            
            <-- var todos = getToDoItems();
                todos.push(access);
                localStrg.setItem('todo', JSON.stringify(todos)); -->
                
            At last I create a show function.
            
            That is why when you refresh the browser it shows the previous list.