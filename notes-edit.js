const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const noteHash = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note){
  return noteHash === note.id;
})
if(note === undefined){
  location.assign('/notes.html');
}
titleElement.value = note.title;
bodyElement.value = note.body;
titleElement.addEventListener('change', function(e){
note.title = e.target.value;
  saveNotes(notes);
})
bodyElement.addEventListener('change',function(e){
note.body = e.target.value;
saveNotes(notes);
  location.assign('/notes.html');
})
document.querySelector('#remove-note').addEventListener('click', function(){
  removeNote(noteHash);
  saveNotes(notes);
  location.assign('/notes.html');
})
