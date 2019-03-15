/* Exercise 2.5*/
const readlineSync = require("readline-sync");
let favoriteNumber = readlineSync.question("What is your favorite number?");
if(favoriteNumber !== 42){
    console.log("Are you sure?");
    readlineSync.question("What is your favorite number?");
} 