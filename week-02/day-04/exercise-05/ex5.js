'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve", "Ashley", "Bözsi", "Kat", "Jane"];
var boys = ["Joe", "Fred", "Béla", "Todd", "Neef", "Jeff"];
var order = [];

var girlsNum = girls.length;
var boysNum = boys.length;
var min = Math.min(girlsNum, boysNum);
var max = Math.max(girlsNum, boysNum);

for (var i = 0; i < min; i++) {
  order.push(girls[i]);
  order.push(boys[i]);
}
if (girlsNum > boysNum) {
  order = order.concat(girls.slice(min));
} else {
  order = order.concat(boys.slice(min));
}

console.log(order);