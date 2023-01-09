const notes = [{
title: 'my next trip', 
body: 'I would like to go to Spain'
},{
title: 'Habits to work on', 
body: 'Exercise. Eating a little better.'
},{
title: 'Office modification',
body: 'Get a new seat'
}]

document.querySelector('#create').addEventListener('click', function(e){
console.log('Did this work?')
e.target.textContent = 'The button was clicked.'
})
document.querySelector('#remove').addEventListener('click', function(){
 document.querySelectorAll('.note').forEach(function(note){
  note.remove()
})
