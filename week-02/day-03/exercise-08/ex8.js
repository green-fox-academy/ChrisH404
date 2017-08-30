'use strict';

var lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var out = new Array(lineCount);
out.fill(" ");
// support both even lineCount and odd lineCount
var most = Math.floor((lineCount + 1) / 2);
// print the top pyramid
for (var i = 0; i < most; i++) {
    out[most - 1 + i] = "*";
    out[most - 1 - i] = "*";
    console.log(out.join(""));
}
// if lineCount is even, print one more line which is filled with *
if (lineCount % 2 === 0) {
    console.log(out.join(""));
}
// print the bottom pyramid
for (var j = most - 1; j > 0; j--) {
    out[most - 1 + j] = " ";
    out[most - 1 - j] = " ";
    console.log(out.join(""));
}