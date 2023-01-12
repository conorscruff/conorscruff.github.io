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
const filteredTodos = function(todos, filters){
  return todos.text.toLowerCase().includes(filters.searchText.toLowerCase()
}
console.log(filteredTodos);
                                           
const incompleteTodos = todos.filter(function(todo) {
return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = 'You have ${incompleteTodos.length} todos left'
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
const p = document.createElement('p')
p.textContent = todo.text
document.querySelector('#todo-list').appendChild(p)
})

document.querySelector('input#add-new-todo').addEventListener('input', function(e){
const u = document.createElement('p')
u.textContent = e.target.value
document.querySelector('body').appendChild(u)
})
