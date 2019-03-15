// Exercise 4.1
//function to calculate rectangle surface
function calSurface (length, width){

    //formula to calculate rectangle surface
    return length * width;
}

// Enable readline-sync node
const readlineSync = require("readline-sync");

// ask for input parameters
let length = readlineSync.question("Enter length of rectangle: ");
let width = readlineSync.question("Enter width of rectangle: ");
 
//call function and log to console
console.log(calSurface());