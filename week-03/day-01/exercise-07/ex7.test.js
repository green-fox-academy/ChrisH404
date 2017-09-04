'use strict';

const test = require('tape');
const Sharpie = require('./ex7.js');

test('Create a sharpie object with constructor', function(t) {
  const expect = {
    color: "green",
    width: 30,
    inkAmount: 100,
    use: function() {
      this.inkAmount -= this.width;
    }
  };
  const actual = new Sharpie("green", 30);
  //t.deepEqual(actual,expect);
  t.equal(actual.color,expect.color);
  t.equal(actual.width,expect.width);
  t.equal(actual.inkAmount,expect.inkAmount);
  actual.use();
  expect.use();
  t.equal(actual.inkAmount,expect.inkAmount);
  t.end();
});