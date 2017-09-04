'use strict';

const costFuel1 = 1;
const costFuel9 = 9;
const fullFuel1 = 5;
const fullFuel9 = 20;

function Rocket(type, fuelLevel, launches) {
  this.type = type;
  this.fuelLevel = fuelLevel || 0;
  this.launches = launches || 0;
  this.launch = function() {
    switch(this.type) {
      case "falcon1":
        if (this.fuelLevel >= costFuel1) {
          this.fuelLevel--;
          this.launches++;
        }
        break;
      case "falcon9":
        if(this.fuelLevel >= costFuel9) {
          this.fuelLevel -= costFuel9;
          this.launches++;
        }
        break;
    }
  };
  this.refill = function() {
    let used = 0;
    switch(this.type) {
      case "falcon1":
        used = fullFuel1 - this.fuelLevel;
        this.fuelLevel = fullFuel1;
        return used;
        break;
      case "falcon9":
        used = fullFuel9 - this.fuelLevel;
        this.fuelLevel = fullFuel9;
        return used;
        break;
      default:
        return 0;
    }
  };
  this.getStats = function() {
    return "name: " + this.type + ", fuel: " + this.fuelLevel + ", launches: " + this.launches;
  };
};


var SpaceX = function(storedFuel) {
  this.storedFuel = storedFuel;
  this.rockets = [];
  this.addRocket = function(rocket) {
    this.rockets.push(rocket);
  };
  this.refillAll = function() {
    let sumFuel = 0;
    this.rockets.forEach(function(item) {
      sumFuel += item.refill();
    });
    this.storedFuel -= sumFuel;
  };
  this.launchAll = function() {
    this.rockets.forEach(function(item) {
      item.launch();
    });
  };
  this.buyFuel = function(amount) {
    this.storedFuel += amount;
  };
  this.getStats = function() {
    let launchesSum = 0;
    this.rockets.forEach(function(item) {
      launchesSum += item.launches;
    });
    return "rockets: " + this.rockets.length + ", fuel: " + this.storedFuel + ", launches: " + launchesSum;
  };
}


// testing code
var falcon1 = new Rocket('falcon1')
var returnedFalcon9 = new Rocket('falcon9', 11, 1)

falcon1.refill() // 5
falcon1.launch()

console.log(falcon1.getStats()) // name: falcon1, fuel: 4, launches: 1
console.log(returnedFalcon9.getStats()) // name: falcon9, fuel: 11, launches: 1
var spaceX = new SpaceX(100)
var falcon1 = new Rocket('falcon1', 0, 0)
var falcon9 = new Rocket('falcon9', 0, 0)
var returnedFalcon9 = new Rocket('falcon9', 11, 1)

console.log(returnedFalcon9.getStats()) // name: falcon9, fuel: 11

spaceX.addRocket(falcon1)
spaceX.addRocket(falcon9)
spaceX.addRocket(returnedFalcon9)

console.log(spaceX.getStats()) // rockets: 3, fuel: 100, launches: 1
spaceX.refillAll()
console.log(spaceX.getStats()) // rockets: 3, fuel: 66, launches: 1
spaceX.launchAll()
console.log(spaceX.getStats()) // rockets: 3, fuel: 66, launches: 4
spaceX.buyFuel(50)
console.log(spaceX.getStats()) // rockets: 3, fuel: 116, launches: 4