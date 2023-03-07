const notes = getSavedNotes();
const filters ={ 
searchText: '' 
} 

const renderNotes = function(notes, filters){ 
const filteredNotes = notes.filter(function(note){
 return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
}) 

document.querySelector('#list-notes').innerHTML = '' 
filteredNotes.forEach(function(note){ 
const noteEl = document.createElement('p') 
if (note.title.length > 0) { 
 noteEl.textContent = note.title
} else{
 noteEl.textContent = 'Unnamed note' 
}
document.querySelector('#list-notes').appendChild(noteEl)
}
)} 
renderNotes(notes, filters)


document.querySelector('#create').addEventListener('click', function(e){
notes.push({
title: '',
    body: ''
})

 renderNotes(notes, filters);
 localStorage.setItem('notes', JSON.stringify(notes));
})
document.querySelector('#search-box').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
document.querySelector('#select-by').addEventListener('change', function(e){
 console.log(e.target.value);
})
