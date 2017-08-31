'use strict';

var list = document.querySelectorAll('li');
var button = document.querySelector('button');
var result = document.querySelector('p');
function count() {
  result.textContent = list.length;
}
button.addEventListener('click',count);