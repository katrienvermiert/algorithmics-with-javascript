// Exercise 7.2
const readlineSync = require("readline-sync");
let n = readlineSync.question("Enter an integer: ");

function fibonacci (n) {
    /* Create array with first two numbers of fibonacci
    sequence set*/
    let array = [0, 1];
    // run through array till n is reached
    for (i = 2; i < n; i++){
        /* add fibonacci numbers to array using
        F(n) = F(n-1) + F(n-2) */
        array.push(array[i - 1] + array[i - 2]);
    }
    
    console.log(array);
}

fibonacci(n);