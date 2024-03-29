//Parse any todos saved in local storage or return an empty array
const getSavedTodos = () =>{
  const todosJSON = localStorage.getItem('todos');
//if present
return todosJSON ?  JSON.parse(todosJSON): [];
}
//Remove todo by ID
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if(todoIndex > -1){
    todos.splice(todoIndex, 1)
  }
}
const toggleCheckbox = (id) => {
  const todo = todos.find((todo) =>todo.id === id)
  if(todo){
    todo.completed = !todo.completed;
  }
}
//Save todos to local storage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}
const generateTodoDOM = (todo) => {
 const todoEl = document.createElement('div');
 //create a checkbox element
  const todoCheckbox = document.createElement('input');
  todoCheckbox.setAttribute('type', 'checkbox');
  todoCheckbox.checked = todo.completed;
  todoCheckbox.addEventListener('change', () => {
    toggleCheckbox(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
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
  removeTodoButton.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  })
  
  return todoEl;
}
//render our todo app
const renderTodos = (todos, filters) => { 
  const filteredTodos = todos.filter((todo) => {
    if(filters.hideCompleted){
      return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())&& !todo.completed;
    }
    else{
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    }
  })

  // we create a new array of incomplete todos on the basis of their completed attribute
const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
 document.querySelector('#todo-list').appendChild(generateSummaryDOM(incompleteTodos));
 
  //we iterate through filteredTodos, creating a new element for each and making the content of each the todo, appending this to our div.
  filteredTodos.forEach((todo) => {
    document.querySelector('#todo-list').appendChild(generateTodoDOM(todo));
  })
  
}
//generate Summary DOM
const generateSummaryDOM = (incompleteTodos) => {
//we first wipe the innerHTML of our todo-list div
  document.querySelector('#todo-list').innerHTML = '';
//we create a summary heading and define the text, along with the length of incompleteTodos array
const summary = document.createElement('h2')
summary.textContent = `You still have ${incompleteTodos.length} todos remaining to complete`;
  return summary;
//we append this summary heading to the div in our document

}
