"use strict";
function handleRandom(count) {
    const randomNumber = Math.random();
    const message = `${count}: ${randomNumber}`;
    console.log(message);
}
function start(callback) {
    var count = 0;
    const timer = setInterval(() => {
        count++;
        if (count >= 5)
            clearInterval(timer);
        callback(count);
    }, 1000);
}
start(handleRandom);
