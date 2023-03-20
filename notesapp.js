let notes = getSavedNotes();
const filters ={ 
searchText: '' 
} 

renderNotes(notes, filters)


document.querySelector('#create').addEventListener('click', function(e){
    const iduu = uuidv4();
    const timestamp = moment().valueOf();
notes.push({
    id: iduu,
title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp.fromNow();
})
saveNotes(notes);
location.assign(`/edit.html#${iduu}`);
})
document.querySelector('#search-box').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
document.querySelector('#select-by').addEventListener('change', function(e){
 console.log(e.target.value);
})
window.addEventListener('storage', function(e){
if(e.key==='notes'){
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
}
})
