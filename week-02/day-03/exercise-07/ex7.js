'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
var out = new Array(2 * lineCount - 1);
out.fill(" ");
for (var i = 0; i < lineCount; i++) {
    out[lineCount - 1 + i] = "*";
    out[lineCount - 1 - i] = "*";
    console.log(out.join(""));
}