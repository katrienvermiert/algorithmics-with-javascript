/* Algorithmics with javascript control structures */
/* Exercise 2.1*/
const readlineSync = require('readline-sync');
let age = readlineSync.question('What is your age?'); 
if(age >= 18){
    console.log('You are an adult');
} else{
    console.log('You are not yet an adult');
}