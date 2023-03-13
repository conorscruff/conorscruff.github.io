const notes = getSavedNotes();
const filters ={ 
searchText: '' 
} 

renderNotes(notes, filters)


document.querySelector('#create').addEventListener('click', function(e){
    const iduu = uuidv4();
notes.push({
    id: iduu,
title: '',
    body: ''
})
saveNotes(notes);
location.assign(`/edit.html#${iduu}`);
})
document.querySelector('#search-box').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
document.querySelector('#select-by').addEventListener('change', function(e){
 console.log("change");
})

