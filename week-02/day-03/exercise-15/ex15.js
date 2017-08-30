'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum(int) {
    if (int === 0) {
        return 0;
    } else {
        return int + sum(int - 1);
    }
}

console.log(sum(0));