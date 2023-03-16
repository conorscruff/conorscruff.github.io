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
const now = new Date('Thu Mar 16 2023 11:56:23');
const then = new Date('Mon Oct 15 1984 11:56:23');
if(now.getTime()<then.getTime()){
    console.log(now.toString())
}
    else{
    console.log(then.toString())
    }
