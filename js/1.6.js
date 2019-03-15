/* Exercise 1.6*/
const readlineSync = require('readline-sync');
let int1 = readlineSync.question('Give me an integer'); 
let int2 = readlineSync.question('Give me another integer'); 
console.log(int1%int2);