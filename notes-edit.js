const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const saveNoteElement = document.querySelector('#save-note');
const createdAtElement = document.querySelector('#created-at');
const noteHash = location.hash.substring(1);
const updatedAtElement = document.querySelector('#updated-at');
let notes = getSavedNotes();
let note = notes.find(function(note){
  return noteHash === note.id;
})
if(note === undefined){
  location.assign('/notes.html');
}
titleElement.value = note.title;
bodyElement.value = note.body;
createdAtElement.innerHTML = `Created at: ${note.createdAt}`;
updatedAtElement.innerHTML = `Last updated at: ${note.updatedAt}`;
titleElement.addEventListener('change', function(e){
note.title = e.target.value;
  note.updatedAt = moment().fromNow();
  saveNotes(notes);
})
bodyElement.addEventListener('change',function(e){
note.body = e.target.value;
note.updatedAt = moment().fromNow();
saveNotes(notes);
})
removeElement.addEventListener('click', function(){
  removeNote(noteHash);
  saveNotes(notes);
  location.assign('/notes.html');
})
saveNoteElement.addEventListener('click', function(){
  location.assign('/notes.html');
})
window.addEventListener('storage', function(e){
if(e.key==='notes'){
  notes = JSON.parse(e.newValue);
  note = notes.find(function(note){
  return note.id === noteHash;
})
if(note === undefined){
  location.assign('/notes.html');
}
titleElement.value = note.title;
bodyElement.value = note.body;
updatedAtElement.innerHTML = note.updatedAt;
}
   })
