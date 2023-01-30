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
  //we first wipe the innerHTML of our todo-list div
  document.querySelector('#todo-list').innerHTML = '';
  //we iterate through filteredTodos, creating a new element for each and making the content of each the todo, appending this to our div.
  filteredTodos.forEach(function(todo){
    const todoEl = document.createElement('p');
    todoEl.textContent = todo.text;
    document.querySelector('#todo-list').appendChild(todoEl);
  })
  
}
//the initial call of renderTodos
renderTodos(todos, filters);
                                           
const incompleteTodos = todos.filter(function(todo) {
return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = 'You have ${incompleteTodos} todos left'
document.querySelector('body').appendChild(summary)

//todos.forEach(function(todo) {
//const p = document.createElement('p')
//p.textContent = todo.text
//document.querySelector('#todo-list').appendChild(p)
//})

document.querySelector('input#add-new-todo').addEventListener('input', function(e){
filters.searchText = e.target.value;
  renderTodos(todos, filters);
})
