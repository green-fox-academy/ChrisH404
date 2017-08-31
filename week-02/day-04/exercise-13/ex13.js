'use strict';

// 1. 
var king = document.querySelector('#b325');
console.log(king);

// 2.
var conceited = document.querySelector('.b326');
alert(conceited + conceited.textContent);

// 3.
var businessLamp = document.querySelectorAll('.big');
console.log(businessLamp[0]);
console.log(businessLamp[1]);

// 4.
var conceitedKing = document.querySelectorAll('.container div');
alert(conceitedKing[0] + conceitedKing[0].textContent);
alert(conceitedKing[1] + conceitedKing[1].textContent);

// 5.
var noBusiness = document.querySelectorAll('div');
for (var i = 0; i < noBusiness.length; i++) {
  console.log(noBusiness[i]);
}

// 6.
var allBizniss = document.querySelector('p');
alert(allBizniss + allBizniss.textContent);