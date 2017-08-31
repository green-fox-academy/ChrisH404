'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function function1(arr) {
  var result = arr.filter(function(item) {
    return item.candies > 4;
  });
  console.log(result);
  return result;
}

function function2(arr) {
  var length = arr.length;
  var sum = 0;
  arr.forEach(function(item) {
    sum += item.candies;
  });
  console.log("They have " + sum/length + " candier on average.");
}

function1(students);
function2(students);