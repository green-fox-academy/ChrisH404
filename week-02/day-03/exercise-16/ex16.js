'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial
function factorio(int) {
    if (int < 0) {
        return 0;
    } else if (int === 0) {
        return 1;
    } else {
        return int * factorio(int - 1);
    }
}

console.log(factorio(4));