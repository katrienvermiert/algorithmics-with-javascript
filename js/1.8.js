/* Exercise 1.8*/
const readlineSync = require('readline-sync');
let name = readlineSync.question('Give me a name '); 
console.log('7 remaining questions'); 
let clothing= readlineSync.question('Give me an item of clothing '); 
console.log('6 remaining questions'); 
let city = readlineSync.question('Give me the name of a city '); 
console.log('5 remaining questions'); 
let bodyPart = readlineSync.question('Give me the name of a bodypart '); 
console.log('4 remaining questions'); 
let letter = readlineSync.question('Give me a letter '); 
console.log('3 remaining questions'); 
let celebrity = readlineSync.question('Give me the name of a celebrity '); 
console.log('2 remaining questions'); 
let place = readlineSync.question('Give me the name of a place '); 
console.log('1 remaining question'); 
let number = readlineSync.question('Give me a number '); 
console.log("There are many different ways to choose a book to read. First, you could ask for recommendations from your friends and family. Just don’t ask Aunt " + name + ".She only reads weird books with " + clothing + " ripping goddesses on the cover. If your friends and family are no help, try checking out the book Review in the. " + city + " imes. If the books featured there are too boring for your taste, try something a little more " + bodyPart + ", like " + letter + ": the " + celebrity + " magazine, or fish magazine. You could also choose a book the old-fashioned way. Head to your local library or " + place + " and browse the shelves until something catches your " + bodyPart + ".Or, you could save yourself a whole lot of trouble and log on to www.bookish.com, the new website to search for books! With all the time you’ll save not having to search for books, you can read " + number + " more books!");