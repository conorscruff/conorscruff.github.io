let notes = getSavedNotes();
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
 console.log(e.target.value);
})
window.addEventListener('storage', function(e){
if(e.key==='notes'){
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
}
})

const birthday = moment();
birthday.subtract(37, 'years').add(7, 'months').subtract(5, 'days')

console.log(birthday.format('ll'));
