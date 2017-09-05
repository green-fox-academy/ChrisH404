'use strict';

var lollypop = "🍭";
var initSpeed = 1/10;
var create_candies = document.querySelector(".create-candies");
var buy_lollypops = document.querySelector(".buy-lollypops");
var candy_machine = document.querySelector(".candy-machine");

var lollypops = document.querySelector(".lollypops");
var candies = document.querySelector(".candies");
var speed = document.querySelector('.speed');
 
// 5.
calculateSpeed();
generateCandy();


// 2.
create_candies.addEventListener('click', function() {
  candies.textContent++;
});

// 3.
buy_lollypops.addEventListener('click', function() {
  if (candies.textContent >= 100) {
    lollypops.textContent += lollypop;
    candies.textContent -= 100;
  }
  calculateSpeed();
});

// 4.
function calculateSpeed() {
  var numberOfLollypop = Array.from(lollypops.textContent).length;
  speed.textContent = Math.floor(numberOfLollypop * initSpeed);
}

function generateCandy() {
  setInterval(function() {
    candies.textContent = parseInt(candies.textContent) + parseInt(speed.textContent);
  }, 1000);
}

// 6.
candy_machine.addEventListener('click', function() {
  speed.textContent *= 10;
});


