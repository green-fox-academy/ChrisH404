'use strict';

// 1.
var p = document.getElementsByTagName("p");
if (p[2].classList.contains("cat") >= 0) {
  alert("YEAH CAT!");
}

// 2.
if (p[3].classList.contains("dolphin")) {
  p[0].textContent = "pear";
}

// 3.
if (p[0].classList.contains("apple")) {
  p[2].textContent = "dog";
}

// 4.
p[0].setAttribute("style", "color:red");

// 5.
p[1].classList.remove("balloon");
