'use strict';

// - Create an array variable named `ag` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

var ag = ['Gin', 'Whiskey', 'Wine', 'Beer'];
var agag = ag.map(function(item, index) {
    return item + item;
});
console.log(agag);