'use strict';

var list = ['apple', 'banana', 'cat', 'dog'];
var li = document.getElementsByTagName("li");
var length = li.length;

for (var i = 0; i < length; i++) {
  li[i].innerHTML = list[i];
}