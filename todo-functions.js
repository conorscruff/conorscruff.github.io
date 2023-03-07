//Parse any todos saved in local storage or return an empty array
const getSavedTodos = function(){
  const todosJSON = localStorage.getItem('todos');
//if present
if(todosJSON !== null) {
  //we parse the info to todos array
  return JSON.parse(todosJSON)
}
  else{
    return []
  }
}
//Save todos to local storage
const saveTodos = function(todos){
  localStorage.setItem('todos', JSON.stringify(todos));
}
const generateTodoDOM = function(todo){
 const todoEl = document.createElement('p');
    if(todo.text.length > 0){
      todoEl.textContent = todo.text; 
    }
    else{
     todoEl.textContent = "Unnamed Todo";
    }
  return todoEl;
}
