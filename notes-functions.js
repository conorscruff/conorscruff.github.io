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
//Remove a note from the list
const removeNote = function(id){
  const noteIndex = notes.findIndex(function (note){
    return note.id === id;
  })
  if(noteIndex > -1){
  notes.splice(noteIndex, 1); 
  }
}
//Save notes to local storage
const saveNotes = function(notes){
localStorage.setItem('notes', JSON.stringify(notes));
}
//Generate the DOM structure for a note
const generateNoteDOM = function(note){
const noteEl = document.createElement('div'); 
  //setup remove note button
const button = document.createElement('button');
button.textContent = 'x';
  noteEl.appendChild(button);
  
  button.addEventListener('click', function(){
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  })
                          
  //setup text
  const textEl = document.createElement('a');
  textEl.setAttribute('href', `/edit.html#${note.id}`);
if (note.title.length > 0) { 
 textEl.textContent = note.title
} else{
 textEl.textContent = 'Unnamed note' 
}
  noteEl.appendChild(textEl);
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

