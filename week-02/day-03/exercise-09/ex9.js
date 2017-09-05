'use strict';

var lineCount = 6;
var percent = "%";
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
var topBottomLine = new Array(lineCount);
var middleLine = new Array(lineCount);
topBottomLine.fill(percent);
if (lineCount >= 3) {
    middleLine.fill(" ");
    middleLine[0] = middleLine[lineCount - 1] = percent;
}
console.log(topBottomLine.join(""));
for (var i = 1; i < lineCount - 1; i++) {
    console.log(middleLine.join(""));
}
if (lineCount > 1) {
    console.log(topBottomLine.join(""));
}