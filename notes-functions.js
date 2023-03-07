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
//Generate the DOM structure for a note
const generateNoteDOM(note){
const noteEl = document.createElement('p') 
if (note.title.length > 0) { 
 noteEl.textContent = note.title
} else{
 noteEl.textContent = 'Unnamed note' 
}
  return noteEl;
}
