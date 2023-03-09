document.querySelector('#note-title').addEventListener('change', function(e){
const noteHash = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note){
return noteHash === note.id;
})
if(note === undefined){
}
  else{
  note.title = e.target.value;
document.querySelector('#note-title').value = note.title;
  saveNotes(notes);
    renderNotes(notes, filters);
  }
   location.assign('/notes.html');
})
