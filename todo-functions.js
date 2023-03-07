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
  document.createElement('p');
    if(todo.text.length > 0){
      return todo.text;
    }
    else{
      return 'Unnamed Todo';
    }
}
