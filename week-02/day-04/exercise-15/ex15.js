'use strict';

var p = document.getElementsByTagName("p");
var length = p.length;
var content = p[length - 1].textContent;
for (var i = 0; i < length - 1; i++) {
  p[i].textContent = content;
}