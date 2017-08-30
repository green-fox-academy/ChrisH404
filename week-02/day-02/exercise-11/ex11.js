'use strict';

var a = 3;
// make it bigger by 10
a += 10;

console.log(a);

var b = 100;
// make it smaller by 7
b -= 7;

console.log(b);

var c = 44;
// double c's value
c *= 2;

console.log(c);

var d = 125;
// divide d's value by 5
d /= 5;

console.log(d);

var e = 8;
// what's the cube of e's value?
e = e * e * e;

console.log(e);

var f1 = 123;
var f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)
var f = f1 > f2;
console.log(f);

var g1 = 350;
var g2 = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
var g = (g2 * 2) > g1;
console.log(g);


var h = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
var h1 = !(h % 11);
console.log(h1);

var i1 = 10;
var i2 = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
var i = i1 > i2 * i2 && i1 < i2 * i2 * i2;
console.log(i);

var j = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
var j1 = !(j % 3) || !(j % 5);
console.log(j1);

var k = 'Apple';
// fill the k variable with its content 4 times
k = k + k + k + k;
console.log(k);