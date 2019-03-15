// Algorithmics with Javascript: Extra exercises
// Exercise 7.1
const readlinSync = require("readline-sync");
let number = Math.floor(Math.random() * 100) + 1;

function guess() {    
    let answer = readlinSync.question("Guess the number: ");
    if (answer < 1) {
        console.log("Too low, try again");
        guess();
    } else if (answer > 100){
        console.log("Too high, try again");
        guess();
    } else if (answer == number){
        console.log("Well guessed!");
    } else {
        console.log("Not quite, try again");
        guess();
    }
}    

guess();