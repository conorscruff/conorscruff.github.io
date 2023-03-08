console.log(uuid4());
// our array of todos objects
const todos = getSavedTodos();
//our array of filters, with searchText as attribute
const filters = {
  searchText: '',
  hideCompleted: false
}
//the initial call of renderTodos
renderTodos(todos, filters);

document.querySelector('#todo-form').addEventListener('submit', function(e){
  e.preventDefault();
  todos.push(
    {
    text: e.target.elements.addedTodo.value,
    completed: false
    })
  renderTodos(todos, filters);
  saveTodos(todos); 
  e.target.elements.addedTodo.value = '';
})

document.querySelector('#hide-complete').addEventListener('change', function(e){
filters.hideCompleted = e.target.checked;
  console.log(filters.hideCompleted);
  renderTodos(todos, filters);
})
