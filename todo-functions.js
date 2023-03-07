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
