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

const filters = {
  searchText: ''
}
const renderTodos = function(todos, filters){ 
  const filteredTodos = todos.filter(function(todo){
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  console.log(filteredTodos);
 // document.querySelector('#todo-list').innerHTML = '';
 // filteredTodos.forEach(function(todo){
  //  const todoEl = document.createElement('p');
   // todoEl.textContent = todo.text;
  //  document.querySelector('#todo-list').appendChild(todoEl);
  //})
  
}
renderTodos(todos, filters);
                                           
const incompleteTodos = todos.filter(function(todo) {
return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = 'You have ${incompleteTodos.length} todos left'
document.querySelector('body').appendChild(summary)

//todos.forEach(function(todo) {
//const p = document.createElement('p')
//p.textContent = todo.text
//document.querySelector('#todo-list').appendChild(p)
//})

document.querySelector('input#add-new-todo').addEventListener('input', function(e){
filters.searchText.textContent = e.target.value;
  renderTodos(todos, filters);
})
