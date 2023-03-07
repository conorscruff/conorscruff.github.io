//Read existing data from localStorage
const getSavedNotes = function(){
  const notesJSON = localStorage.getItem('notes') 
if(notesJSON !== null) { 
notes = JSON.parse(notesJSON)
}
}

