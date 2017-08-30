'use strict';

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer() {
    var length = arguments.length;
    if (length === 0) {
        console.log("No parameters!");
    } else {
        console.log(arguments);
    }
}

printer();