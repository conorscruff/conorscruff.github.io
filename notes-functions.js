//Read existing data from localStorage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes') 
return notesJSON !== null ? JSON.parse(notesJSON) : [];
}
//Remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);
  if(noteIndex > -1){
  notes.splice(noteIndex, 1); 
  }
}
//Save notes to local storage
const saveNotes = (notes) => {
localStorage.setItem('notes', JSON.stringify(notes));
}
//Generate the DOM structure for a note
const generateNoteDOM = (note) => {
const noteEl = document.createElement('div'); 
  //setup remove note button
const button = document.createElement('button');
button.textContent = 'x';
  noteEl.appendChild(button);
  
  button.addEventListener('click', () => {
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
//sort notes one of three selectable ways
const sortNotes = (notes, sortBy) => {
  if(sortBy === 'byEdited'){
  return notes.sort((a, b) => {
    if(a.updatedAt > b.updatedAt){
    return -1
    }
    else if(a.updatedAt < b.updatedAt){
    return 1;
    }
   else{
   return 0;
   }
  })
  }
  else if(sortBy === 'byCreated'){
  return notes.sort((a,b) => {
    if(a.createdAt > b.createdAt){
    return -1;
    }
    else if(a.createdAt < b.createdAt){
    return 1;
    }
    else{
    return 0;
    }
  })
  }
  else if(sortBy === 'byAlpha'){
  return notes.sort((a, b) => {
  if(a.title.toLowerCase() < b.title.toLowerCase()){
  return -1;
  }
    else if(a.title.toLowerCase() > b.title.toLowerCase()){
    return 1;
    }
    else{
    return 0;
    }
  })}
  else{
  return notes;
  }
}

//Render notes application
const renderNotes = (notes, filters) => { 
  notes = sortNotes(notes, filters.sortBy);
const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase())) 

document.querySelector('#list-notes').innerHTML = '' 
filteredNotes.forEach((note) => { 
const noteEl = generateNoteDOM(note);
document.querySelector('#list-notes').appendChild(noteEl)
})
}
//Generate the last generated message
const generateLastEdited = (timestamp) => `Last edited: ${moment(timestamp).fromNow()}`;


