'use strict';

// 1. 
var asteroidList = document.querySelector('ul.asteroids');
var newAsteroid = document.createElement('li');
newAsteroid.textContent = "The Green Fox";
asteroidList.appendChild(newAsteroid);

// 2.
var newAsteroid2 = document.createElement('li');
newAsteroid2.textContent = "The Lamplighter";
asteroidList.appendChild(newAsteroid2);

// 3.
var container = document.querySelector('.container');
var newHeading = document.createElement("h1");
newHeading.textContent = "I can add elements to the DOM!";
container.appendChild(newHeading);

// 4.
var newImg = document.createElement('img');
newImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMuVqKO5AMeL4RXwjoH9m4eXeF_pVMdtrNBCPGSZdj9HccvrEPhoZ7XKw";
container.appendChild(newImg);