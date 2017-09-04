'use strict';

var Sharpie = function(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;
  this.use = function() {
    this.inkAmount -= this.width;
  }
}

module.exports = Sharpie;

// code test
var mySharpie = new Sharpie("blue", 20);
console.log(mySharpie.color);
console.log(mySharpie.width);
console.log(mySharpie.inkAmount);

mySharpie.use();

console.log(mySharpie.inkAmount);

