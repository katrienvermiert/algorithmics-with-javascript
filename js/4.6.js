// Exercise 4.6
const readlineSync = require('readline-sync');
let a = readlineSync.question("Enter a number to factorialize: ");

function factorial (a){
    if((a == 0) || (a == 1)){
        return 1;
    } else {
        return (a * factorial(a-1));
    }
}

console.log(factorial(a));