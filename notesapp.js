const notes = getSavedNotes();
const filters ={ 
searchText: '' 
} 

renderNotes(notes, filters)


document.querySelector('#create').addEventListener('click', function(e){
notes.push({
title: '',
    body: ''
})

 renderNotes(notes, filters);
saveNotes(notes);
})
document.querySelector('#search-box').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
document.querySelector('#select-by').addEventListener('change', function(e){
 console.log(e.target.value);
})
