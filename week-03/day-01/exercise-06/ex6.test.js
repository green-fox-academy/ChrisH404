'use strict';

const test = require('tape');
const countLetterInString = require('./ex6.js');

test('Count the letter in string', function(t) {
  const expect = 2;
  const actual = countLetterInString("chrishuang", "h");
  t.equal(actual,expect);
  t.end();
});