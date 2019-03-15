/* Exercise 2.2*/
const readlineSync = require('readline-sync');
function numbers(){
let min = readlineSync.question('Enter a number'); 
let max = readlineSync.question('enter a second number'); 
let current = readlineSync.question('enter a third number'); 
if(current > min && current < max){
    console.log(current);
} else if(min > max){ 
    console.log('error you are not so clever after all')
} else { 
    console.log('try again');
    numbers()
    }  
}
numbers();