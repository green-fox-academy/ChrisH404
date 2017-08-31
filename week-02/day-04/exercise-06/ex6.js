'use strict';
// Add "e" to every string in far

var far = ["appl", "fiddl", "Bruce Le", "hom"];

var far = far.map(function(item) {
  return item += "e";
});

console.log(far);