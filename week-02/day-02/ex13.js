'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

var remainSec = 60 - currentSeconds + 60 * (59 - currentMinutes) + 3600 * (23 - currentHours);
console.log("There are: " + remainSec + " seconds remain.");