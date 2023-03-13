const noteHash = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note){
  return noteHash === note.id;
})
if(note === undefined){
  location.assign('/notes.html');
}
document.querySelector('#note-title').value = note.title;
document.querySelector('#note-body').value = note.body;
document.querySelector('#note-title').addEventListener('change', function(e){
note.title = e.target.value;
  saveNotes(notes);
  renderNotes(notes, filters);
})
document.querySelector('#note-body').addEventListener('change',function(e){
note.body = e.target.value;
saveNotes(notes);
  renderNotes(notes, filters);
  location.assign('/notes.html');
})
document.querySelector('#remove-note').addEventListener('click', function(){
  removeNote(noteHash);
  saveNotes(notes);
  renderNotes(
  location.assign('/notes.html');
})
