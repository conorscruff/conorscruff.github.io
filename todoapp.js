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

const incompleteTodos = todos.filter(function(todo) {
return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = 'You have <script>${incompleteTodos.length}</script> todos left'
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
const p = document.createElement('p')
p.textContent = todo.text
document.querySelector('body').appendChild(p)
})



document.querySelector('add-todo').addEventListener('click', function(e){
console.log('Added new TODO')
})
