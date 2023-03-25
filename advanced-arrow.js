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

const getTip = (amount) => typeof amount === "number" ? amount* .25 : throw Error('Wrong type');
try{
console.log(getTip(true));
}
catch(e){
console.log('catch block is running.')
}
