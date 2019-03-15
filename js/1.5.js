/* Exercise 1.5*/
const readlineSync = require('readline-sync');
let k = Math.floor(readlineSync.question('Give me a decimal number')); 
let l = readlineSync.question('Give me another decimal number'); 
console.log(k*l);