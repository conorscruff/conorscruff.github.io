//Read existing data from localStorage
const getSavedNotes = function(){
  const notesJSON = localStorage.getItem('notes') 
if(notesJSON !== null) { 
return JSON.parse(notesJSON)
}
  else{
    return []
  }
}
//Save notes to local storage
const saveNotes = function(notes){
localStorage.setItem('notes', JSON.stringify(notes));
}
//Generate the DOM structure for a note
const generateNoteDOM = function(note){
const noteEl = document.createElement('div'); 
  const textEl = document.createElement('p');
const button = document.createElement('button');
button.textContent = 'x';
if (note.title.length > 0) { 
 textEl.textContent = note.title
} else{
 textEl.textContent = 'Unnamed note' 
}
  noteEl.appendChild(textEl);
  noteEl.appendChild(button);
  return noteEl;
}
//Render notes application
const renderNotes = function(notes, filters){ 
const filteredNotes = notes.filter(function(note){
 return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
}) 

document.querySelector('#list-notes').innerHTML = '' 
filteredNotes.forEach(function(note){ 
const noteEl = generateNoteDOM(note);
document.querySelector('#list-notes').appendChild(noteEl)
})
}

