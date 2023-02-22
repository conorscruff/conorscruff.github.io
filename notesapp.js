const notes =[] 
const filters ={ 
searchText: '' 
} 
const notesJSON = localStorage.getItem('notes') 
if(notesJSON != null) { 

}
const renderNotes = function(notes, filters){ 
const filteredNotes = notes.filter(function(note){return note.title.toLowerCase().includes(filters.searchText.toLowerCase())}) 

document.querySelector('#notes').innerHTML = '' 
filteredNotes.forEach(function(note){ 
const noteEl = document.createElement('p') 
noteEl.textContent = note.title 
document.querySelector('#notes').appendChild(noteEl)
}
)} 
renderNotes(notes, filters)


document.querySelector('#create').addEventListener('click', function(e){
notes.push({
title:'',
body: ''
})
localStorage.setItem('notes', JSON.stringify(notes));
 renderNotes(notes, filters);
})
document.querySelector('#search-box').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
document.querySelector('#select-by').addEventListener('change', function(e){
 console.log(e.target.value);
})
