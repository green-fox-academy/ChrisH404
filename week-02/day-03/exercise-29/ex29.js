'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var x = 4;

function matrix(length) {
    var matrix = new Array(length);
    for (var i = 0; i < length; i++) {
        matrix[i] = new Array(length);
        matrix[i].fill(0);
        matrix[i][length - 1 - i] = 1;
    }
    return matrix;
}

matrix(x);

console.log(matrix(x));