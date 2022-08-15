// .reduce to add all numbers in array
// array.reduce( function(total, currentValue, currentIndex, arr), 
// initialValue )
function oddOrEven(array) {
    return array.reduce(function(total, num) {
      return total + num}
    ,0) % 2 == 0 ? 'even' : 'odd';
  }