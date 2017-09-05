'use strict';

var button = document.querySelector('#my_button');
button.addEventListener('click',function() {
  setTimeout(function() {
    button.textContent = "2 seconds elapsed";
  }, 2000);
});