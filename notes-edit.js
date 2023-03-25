const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const saveNoteElement = document.querySelector('#save-note');
const createdAtElement = document.querySelector('#created-at');
const noteHash = location.hash.substring(1);
const updatedAtElement = document.querySelector('#updated-at');
let notes = getSavedNotes();
let note = notes.find((note) => noteHash === note.id);
if(!note){
  location.assign('/notes.html');
}
titleElement.value = note.title;
bodyElement.value = note.body;
createdAtElement.textContent = `Created at: ${note.createdAt}`;
updatedAtElement.textContent = generateLastEdited(note.updatedAt);
titleElement.addEventListener('change', (e) => {
note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  updatedAtElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
})
bodyElement.addEventListener('change',(e) => {
note.body = e.target.value;
note.updatedAt = moment().valueOf();
  updatedAtElement.textContent = generateLastEdited(note.updatedAt);
saveNotes(notes);
})
removeElement.addEventListener('click', () => {
  removeNote(noteHash);
  saveNotes(notes);
  location.assign('/notes.html');
})
saveNoteElement.addEventListener('click', () => {
  location.assign('/notes.html');
})
window.addEventListener('storage', (e) => {
if(e.key==='notes'){
  notes = JSON.parse(e.newValue);
  note = notes.find(function(note){
  return note.id === noteHash;
})
if(!note){
  location.assign('/notes.html');
}
titleElement.value = note.title;
bodyElement.value = note.body;
updatedAtElement.textContent = generateLastEdited(note.updatedAt);
}
   })
