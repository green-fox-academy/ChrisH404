'use strict';

// 1.
var asteroidList = document.querySelector('ul.asteroids');
var theKing = document.querySelector('li');
asteroidList.removeChild(theKing);

// 2.
var newAsteroid1 = document.createElement('li');
var newAsteroid2 = document.createElement('li');
var newAsteroid3 = document.createElement('li');
newAsteroid1.textContent = newAsteroid2.textContent = newAsteroid3.textContent = "The Fox";
asteroidList.appendChild(newAsteroid1);
asteroidList.appendChild(newAsteroid2);
asteroidList.appendChild(newAsteroid3);