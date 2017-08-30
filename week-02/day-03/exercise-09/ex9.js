'use strict';

var lineCount = 6;
// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
var full = new Array(lineCount);
var part = new Array(lineCount);
full.fill("%");
if (lineCount >= 3) {
    part.fill(" ");
    part[0] = part[lineCount - 1] = "%";
}
console.log(full.join(""));
for (var i = 1; i < lineCount - 1; i++) {
    console.log(part.join(""));
}
if (lineCount > 1) {
    console.log(full.join(""));
}