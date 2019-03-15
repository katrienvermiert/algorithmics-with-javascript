/* Exercise 2.7*/
const readlineSync = require("readline-sync");
let n = 0;
let sum = 0;
let count = [];

n = readlineSync.question("Enter a number: ");

for(i = 0; i < n; i++){
    count.push(Number(readlineSync.question("Enter a number: ")));
}

for(i = 0; i < count.length; i++){
    sum += count[i];
}

console.log(sum);