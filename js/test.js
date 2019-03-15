
/* Algorithmics with javascript intro*/
/* Ask data to the user*/
const readlineSync = require("readline-sync");
let username = readlineSync.question('Can you give me your name please?');
console.log("Hello " + username);
console.log("It works !!!");

/* New number() */
let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?'));
let cssBadges = new Number(readlineSync.question('How many CSS badges do you have?'));
let totalBadges = htmlBadges + cssBadges;
console.log('Woaw, you have ' + totalBadges + "!");
