const notes = []

//Check for existing saved data
const filters = {
 searchText: ''
}
const renderNotes = function(notes, filters){
 const filteredNotes = notes.filter(function(note){
 return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
 })
 
 document.querySelector('#list-notes').innerHTML = ''
 
 filteredNotes.forEach(function (note){
  const noteEl = document.createElement('p')
  noteEl.textContent = note.title
  document.querySelector('#list-notes').appendChild(noteEl)
 })
}
renderNotes(notes, filters)
document.querySelector('#create').addEventListener('click', function(e){
console.log('Did this work?')
e.target.textContent = 'The button was clicked.'
})
document.querySelector('#search-box').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
document.querySelector('#select-by').addEventListener('change', function(e){
 console.log(e.target.value);
})
