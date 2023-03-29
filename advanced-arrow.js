const square = (num) => {
  return num*num;
}
console.log(square(5));

const people = [{
name: 'Conor', 
age: 39},
{
name: 'Bradley',
age: 54},
{name: 'Oscar',
age: 21}
]
              
const age21 = people.find((person)=> person.age === 21);

console.log(age21.name);

const add = function(a, b){
  return arguments[0] + arguments[1];
}
console.log(add(11,22,33,44));

const team = ['Tyler', 'Johnathan', 'Rachel'];
console.log(team.length <= 4 ? `Team size: ${team.length}`: 'Too many members on your team')
team.push('Jordan');
team.push('Brian');
console.log(team.length <= 4 ? `Team size: ${team.length}`: 'Too many members on your team')
 
const products = [];
const product = products[0];
if(product){
  console.log('Product found.');
}
else{
console.log('Product not found.')
            }
console.log('5' + 5);

const getTip = (amount) => amount* .25
try{
console.log(getTip(true));
}
catch(e){
console.log('catch block is running.')
}

const gradeCalc = (score, totalScore) => {
  if(typeof score === "number" && typeof totalScore === "number"){
const percent = (score/totalScore) * 100 
let letterGrade='' 
if(percent>=90) {letterGrade = 'A'} 
  else if(percent >= 80){ 
    letterGrade = 'B'
  } 
  else if(percent>= 70){
    letterGrade = 'C' 
  } 
  else if(percent >= 60) {
    letterGrade = 'D'
  } 
  else {letterGrade = 'F' } 
  return `You got a ${letterGrade} (${percent}%)!`
}
else{
 throw Error("Please provide numbers only");
}
}
try{
console.log(gradeCalc(56, 56))
}
catch(e){
  console.log("Please enter a number in the score and total score fields")
}
