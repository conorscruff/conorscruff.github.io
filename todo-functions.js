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
//Remove todo by ID
const removeTodo = function(id){
  const todoIndex = todos.findIndex(function(todo){
  return todo.id === id;
  })
  if(todoIndex > -1){
    todos.splice(todoIndex, 1)
  }
}
//Save todos to local storage
const saveTodos = function(todos){
  localStorage.setItem('todos', JSON.stringify(todos));
}
const generateTodoDOM = function(todo){
 const todoEl = document.createElement('div');
 //create a checkbox element
  const todoCheckbox = document.createElement('input');
  todoCheckbox.setAttribute('type', 'checkbox');
  todoCheckbox.checked = todo.completed;
  todoCheckbox.addEventListener('change', function(e){
    console.log(e.target.value.checked);
  })
  todoEl.appendChild(todoCheckbox);
  const todoText = document.createElement('span');
    if(todo.text.length > 0){
      todoText.textContent = todo.text; 
    }
    else{
     todoText.textContent = "Unnamed Todo";
    }
  todoEl.appendChild(todoText);
   //create button to remove todo
  const removeTodoButton = document.createElement('button');
  todoEl.appendChild(removeTodoButton);
  removeTodoButton.textContent = 'x';
  removeTodoButton.addEventListener('click', function(){
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  })
  
  return todoEl;
}
//render our todo app
const renderTodos = function(todos, filters){ 
  const filteredTodos = todos.filter(function(todo){
    if(filters.hideCompleted){
      return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())&& !todo.completed;
    }
    else{
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    }
  })

  // we create a new array of incomplete todos on the basis of their completed attribute
const incompleteTodos = filteredTodos.filter(function(todo) {
return !todo.completed
})
 document.querySelector('#todo-list').appendChild(generateSummaryDOM(incompleteTodos));
 
  //we iterate through filteredTodos, creating a new element for each and making the content of each the todo, appending this to our div.
  filteredTodos.forEach(function(todo){
    document.querySelector('#todo-list').appendChild(generateTodoDOM(todo));
  })
  
}
//generate Summary DOM
const generateSummaryDOM = function(incompleteTodos){
//we first wipe the innerHTML of our todo-list div
  document.querySelector('#todo-list').innerHTML = '';
//we create a summary heading and define the text, along with the length of incompleteTodos array
const summary = document.createElement('h2')
summary.textContent = `You still have ${incompleteTodos.length} todos remaining to complete`;
  return summary;
//we append this summary heading to the div in our document

}
