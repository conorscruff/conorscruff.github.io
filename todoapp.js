// our array of todos objects
const todos = [{
text: 'Order cat food',
completed: false
},{
text: 'Clean kitchen',
completed: true
},{
text: 'Buy food',
completed: true
},{
text: 'Do work',
completed: false
},{
text: 'Exercise',
completed: true
}]
//our array of filters, with searchText as attribute
const filters = {
  searchText: ''
}
//function renderTodos, returns true if todo.text matches searchText
const renderTodos = function(todos, filters){ 
  const filteredTodos = todos.filter(function(todo){
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  //renders filteredTodos in console
  console.log(filteredTodos);
  // we create a new array of incomplete todos on the basis of their completed attribute
const incompleteTodos = filteredTodos.filter(function(todo) {
return !todo.completed
})
 //we first wipe the innerHTML of our todo-list div
  document.querySelector('#todo-list').innerHTML = '';
//we create a summary heading and define the text, along with the length of incompleteTodos array
const summary = document.createElement('h2')
summary.textContent = 'Todos yet to complete: ' + incompleteTodos.length

//we append this summary heading to the div in our document
document.querySelector('#todo-list').appendChild(summary)
 
  //we iterate through filteredTodos, creating a new element for each and making the content of each the todo, appending this to our div.
  filteredTodos.forEach(function(todo){
    const todoEl = document.createElement('p');
    todoEl.textContent = todo.text;
    document.querySelector('#todo-list').appendChild(todoEl);
  })
  
}
//the initial call of renderTodos
renderTodos(todos, filters);


document.querySelector('#todo-form').addEventListener('submit', function(e){
  e.preventDefault();
  console.log(e.target.elements.addedTodo.value)
  e.target.elements.addedTodo.value = '';
})
