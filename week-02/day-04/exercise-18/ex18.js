'use strict';

// 1.
var img = document.querySelector("img");
console.log(img.getAttribute("src"));

// 2.
var replacedImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMuVqKO5AMeL4RXwjoH9m4eXeF_pVMdtrNBCPGSZdj9HccvrEPhoZ7XKw";
img.setAttribute("src",replacedImg);

// 3.
var a = document.querySelector("a");
var greenFoxLink = "https://www.greenfoxacademy.com/";
a.setAttribute("href", greenFoxLink);

// 4.
var buttons = document.querySelectorAll("button");
buttons[1].setAttribute("disabled","disabled");

// 5.
var replacedText = "Don't click me!";
buttons[1].textContent = replacedText;