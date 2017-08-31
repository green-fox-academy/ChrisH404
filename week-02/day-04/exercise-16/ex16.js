'use strict';

// 1
var p1 = document.getElementsByTagName("p")[0];
var output1 = document.getElementsByClassName("output1")[0];
output1.textContent = p1.textContent;

// 2
var output2 = document.getElementsByClassName("output2")[0];
output2.innerHTML = p1.innerHTML;