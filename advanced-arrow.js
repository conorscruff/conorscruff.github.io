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
              
const under30 = people.filter(function(person){
 return person.age < 30
})
console.log(under30)
