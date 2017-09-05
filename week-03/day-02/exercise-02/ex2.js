'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

var occurTimes = fruits.map(function(fruit) {
  var temp = fruit.split("").filter(function(item) {
    return item === "e";
  });
  return temp.length;
});

console.log(occurTimes);