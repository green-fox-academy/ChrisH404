'use strict';

//Create a function that reverses a string
function reverse(str) {
  let result = '';
  let length = str.length;
  
  for (let i = length - 1; i >= 0; i--) {
    result += str.substr(i, 1)
  }
  return result;
}

console.log(reverse('chrishuang'));
