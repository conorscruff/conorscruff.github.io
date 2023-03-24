let notes = getSavedNotes();
const filters ={ 
searchText: '',
sortBy: 'byEdited'
} 

renderNotes(notes, filters)


document.querySelector('#create').addEventListener('click', (e) => {
    const iduu = uuidv4();
    const timestamp = moment().valueOf();
notes.push({
    id: iduu,
title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
})
saveNotes(notes);
location.assign(`/edit.html#${iduu}`);
})
document.querySelector('#search-box').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
document.querySelector('#select-by').addEventListener('change',(e) =>{
 filters.sortBy = e.target.value;
    renderNotes(notes, filters);
})
window.addEventListener('storage',(e) => {
if(e.key==='notes'){
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
}
})
