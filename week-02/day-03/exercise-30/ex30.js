'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

var aj = [3, 4, 5, 6, 7];
var length = aj.length;

//- do it with creating a new temp array and a loop
var ja = [];
for (var i = 0; i < length; i++) {
    ja[i] = aj[length - 1 - i];
}
console.log(ja);

//- do it with the built in method
aj.reverse();
console.log(aj);