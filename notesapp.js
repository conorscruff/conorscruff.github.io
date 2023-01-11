const notes = [{
title: 'my next trip', 
body: 'I would like to go to Spain'
},{
title: 'Habits to work on', 
body: 'Exercise. Eating a little better.'
},{
title: 'Office modification',
body: 'Get a new seat'
}]

const filters = {
 searchText: ''
}
const renderNotes = function(notes, filters){
 const filteredNotes = notes.filter(function(note){
 return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
 })
 console.log("Did this work?")
}
renderNotes(notes, filters)
document.querySelector('#create').addEventListener('click', function(e){
console.log('Did this work?')
e.target.textContent = 'The button was clicked.'
})
 document.querySelector('#remove').addEventListener('click', function(){
  document.querySelectorAll('.note').forEach(function(note){
  note.remove()
  })
})
document.querySelector('#search-box').addEventListener('input', function(e){
 document.querySelectorAll('.note').forEach(function(note){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
 })
})
