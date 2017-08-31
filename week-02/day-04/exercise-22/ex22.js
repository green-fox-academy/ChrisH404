'use strict';

// 1.
var asteroidList = document.querySelector('ul.asteroids');
var theKing = document.querySelector('li');
asteroidList.removeChild(theKing);

// 2.
var list = ['apple', 'bubble', 'cat', 'green fox'];
var newAsteroids = [];
list.forEach(function(item,index){
  newAsteroids[index] = document.createElement('li');
  newAsteroids[index].textContent = item;
  asteroidList.appendChild(newAsteroids[index]);
});