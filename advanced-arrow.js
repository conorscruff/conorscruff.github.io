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
              
const age21 = people.filter((person)=> person.age === 21);

console.log(age21.name);
