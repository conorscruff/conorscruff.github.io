const noteHash = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(function(note){
  return noteHash === note.id;
})
if(note === "undefined"){
  location.assign('/notes.html');
}
