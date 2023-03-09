const noteHash = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note){
  return noteHash === note.id;
})
if(note === undefined){
  location.assign('/notes.html');
}
let noteTitleOnEdit = document.querySelector('#note-title').value = note.title;
let noteBodyOnEdit = document.querySelector('#note-body').value = note.body;
document.querySelector('#note-title').addEventListener('change', function(e){
note.title = e.target.value;
  noteTitleOnEdit = note.title;
  saveNotes(notes);
})
document.querySelector('#note-body').addEventListener('change',function(e){
note.body = e.target.value;
noteBodyOnEdit = note.body;
saveNotes(notes);
  location.assign('/notes.html');
})
document.querySelector('#remove-note').addEventListener('click', function(){
  note.body = '';
  noteBodyonEdit = '';
  saveNotes(notes);
  renderNotes(notes, filters);
  location.assign('/notes.html');
})
