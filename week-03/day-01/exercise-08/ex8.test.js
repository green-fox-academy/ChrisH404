'use strict';

const test = require('tape');
const ex8 = require('./ex8.js');

test('Unit test for Animal constructor', function(t) {
  const expect = {
    hunger: 50,
    thirst: 50,
    eat: function() {
      this.hunger--;
    },
    drink: function() {
      this.thirst--;
    },
    play: function() {
      this.hunger++;
      this.thirst++;
    }
  }
  const actual = new ex8.Animal();
  t.equal(expect.hunger, actual.hunger);
  t.equal(expect.thirst, actual.thirst);
  expect.eat();
  actual.eat();
  t.equal(expect.hunger, actual.hunger);
  t.equal(expect.thirst, actual.thirst);
  expect.drink();
  actual.drink();
  t.equal(expect.hunger, actual.hunger);
  t.equal(expect.thirst, actual.thirst);
  expect.play();
  actual.play();
  t.equal(expect.hunger, actual.hunger);
  t.equal(expect.thirst, actual.thirst);
  t.end();
});

test('Unit test for Farm constructor', function(t) {
  const animal1 = new ex8.Animal();
  const animal2 = new ex8.Animal();
  const animal3 = new ex8.Animal();
  const animals = [animal1,animal2,animal3];
  animal1.eat();
  animal2.drink();
  animal3.play();
  const expect = {
    animals: animals,
    slots: 5,
    breed: function() {
      if(this.slots > 0){
        var newAnimal = new ex8.Animal();
        this.animals.push(newAnimal);
        this.slots--;
      }
    },
    slaughter: function() {
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
  };
  const actual = new ex8.Farm(animals, 5);
  t.equal(expect.animals, actual.animals);
  t.equal(expect.slots, actual.slots);
  expect.breed();
  actual.breed();
  t.equal(expect.animals, actual.animals);
  t.equal(expect.slots, actual.slots);
  expect.slaughter();
  actual.slaughter();
  t.equal(expect.animals, actual.animals);
  t.equal(expect.slots, actual.slots);
  t.end();
});