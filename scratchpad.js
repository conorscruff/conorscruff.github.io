const array = [1, 2, 3, 4, 6]

const filters = {
  searchText: 2
}
function filterItems(array, filters) {
  return array.filter((el) => el > filters.first)
}
console.log(array);
console.log(filterItems(array, filters));
