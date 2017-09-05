'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum(int) {
    if (int === 0) {
        return 0;
    } else if (int > 0){
        return int + sum(int - 1);
    }else {
        return "Please input a positive number!";
    }
}

console.log(sum(8));