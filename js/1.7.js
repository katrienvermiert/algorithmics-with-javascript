/* Exercise 1.7*/
const readlineSync = require('readline-sync');
let shoeSize = readlineSync.question('What is your shoesize?');
let birthYear = readlineSync.question('What is your birthyear?'); 
console.log((shoeSize*2 +5)*50 - birthYear + 1766);