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
var odd = [];
var even = [];
for (var i = 0; i < 8; i++) {
    if (i % 2 === 0) {
        odd[i] = " ";
        even[i] = "%";
    } else {
        odd[i] = "%";
        even[i] = " ";
    }
}
for (var j = 0; j < 8; j++) {
    if (j % 2 === 0) {
        console.log(even.join(""));
    } else {
        console.log(odd.join(""));
    }
}