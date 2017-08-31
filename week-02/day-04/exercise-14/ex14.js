'use strict';

// 1
var h1 = document.getElementsByTagName("h1")[0];
alert(h1.textContent);

// 2
var p = document.getElementsByTagName("p");
console.log(p[0].textContent);

// 3
alert(p[1].textContent);

// 4
h1.textContent = "New content";

// 5
p[2].textContent = p[0].textContent;