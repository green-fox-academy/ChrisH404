'use strict';

function test() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        },0);
    }
}

test();
