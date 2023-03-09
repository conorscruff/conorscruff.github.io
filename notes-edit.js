const noteHash = location.hash.substring(1);
const notes = getSavedNotes();
let note = notes.find(function(note){
  return noteHash === note.id;
})
if(note === undefined){
  location.assign('/notes.html');
}
document.querySelector('#note-title').value = note.title;
document.querySelector('#note-body').value = note.body;
document.querySelector('#note-title').addEventListener('change', function(e){
console.log(e.target.value);
})
