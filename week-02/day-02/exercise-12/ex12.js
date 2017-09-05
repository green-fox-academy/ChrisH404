'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
var length = 2.3;
var width = 2.3;
var height = 3.5;

var surfaceArea = (length * width + length * height + height * width) * 2;
var volume = length * width * height;

console.log("Surface Area: " + surfaceArea);
console.log("Volume: " + volume);