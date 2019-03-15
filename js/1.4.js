/* Exercise 1.4*/
const readlineSync = require('readline-sync');
let firstName = readlineSync.question('What is your first name?'); 
let surName = readlineSync.question('What is your surname?'); 
let city = readlineSync.question('What city do you live in?'); 
console.log('Hello ' + firstName); 
console.log(surName + ' Cool surname'); 
console.log(city + ' nice city');