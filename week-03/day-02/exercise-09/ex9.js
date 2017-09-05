'use strict';

var button = document.querySelector('#my_button');
var clickTimes = 0;
setTimeout(function() {
  button.addEventListener('click', function() {
    clickTimes ++;
    if (clickTimes >= 3) {
      button.textContent = "5 seconds elapsed and clicked 3 times";
    }
  });
}, 5000);