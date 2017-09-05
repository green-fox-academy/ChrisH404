'use strict';
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
var oddRow = [];
var evenRow = [];
for (var i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        oddRow[i] = " ";
        evenRow[i] = "%";
    } else {
        oddRow[i] = "%";
        evenRow[i] = " ";
    }
}
for (var i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        console.log(evenRow.join(""));
    } else {
        console.log(oddRow.join(""));
    }
}