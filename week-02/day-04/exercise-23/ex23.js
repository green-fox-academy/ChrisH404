'use strict';

var planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

// 1.
var asteroidList = document.querySelector('ul.asteroids');
var theKing = document.querySelector('li');
asteroidList.removeChild(theKing);

// 2.
var newAsteroids = [];
planetData.forEach(function(item,index) {
  if (item.asteroid) {
    newAsteroids[index] = document.createElement('li');
    newAsteroids[index].textContent = item.content;
    newAsteroids[index].classList.add(item.category);
    asteroidList.appendChild(newAsteroids[index]);
  }
});