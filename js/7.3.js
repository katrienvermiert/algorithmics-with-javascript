// Exercise 7.3
const readlineSync = require("readline-sync");
let number = readlineSync.question("Enter a positive number: ");

function divisors(number) {
    let array = [];
    for (i = 2; i < number; i++){
        if (Number.isInteger(number/i)){
            array.push(i);
        }
    }

    console.log(array);
}

divisors(number);