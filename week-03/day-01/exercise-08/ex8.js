'use strict';

var Animal = function () {
  this.hunger = 50;
  this.thirst = 50;
  this.eat = function() {
    this.hunger--;
  };
  this.drink = function() {
    this.thirst--;
  };
  this.play = function() {
    this.hunger++;
    this.thirst++;
  }
}

var Farm = function (animals, slots) {
  this.animals = animals;
  this.slots = slots;
  this.breed = function() {
    if(this.slots > 0){
      var newAnimal = new Animal();
      this.animals.push(newAnimal);
      this.slots--;
    }
  }
  this.slaughter = function() {
    var ind = 0;
    var hunger = 50;
    this.animals.forEach(function(item, index) {
      if (item.hunger < hunger) {
        hunger = item.hunger;
        ind = index;
      }
    });
    this.animals.splice(ind,1);
    this.slots++;
  }
}

module.exports = {
  Animal: Animal,
  Farm: Farm
};

// code test
var animal1 = new Animal();
var animal2 = new Animal();
var animal3 = new Animal();

animal1.eat();
animal2.drink();
animal3.play();

var animals = [animal1,animal2,animal3];
var farm = new Farm(animals,2);

console.log(farm.animals);

farm.breed();
farm.breed();
farm.breed();
farm.slaughter();

console.log(farm);
