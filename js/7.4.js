// Exercise 7.4
const readlineSync = require("readline-sync");


console.log("Hello! Welcome to the Pizza Flavors Manager. \nPlease choose your actions: \n");
console.log("1 - List all the pizza flavors \n");
console.log("2 - Add a new pizza flavor \n");
console.log("3 - Remove a pizza flavor \n");
console.log("4 - Exit this program \n");


let number = parseInt(readlineSync.question("Enter your action's number: "));
let pizzaList = [];

while (number != 4){
    if (number == 1){
        console.log(pizzaList);
        number = parseInt(readlineSync.question("Enter your action's number: "));
    } else if (number == 2){
        let addFlavor = readlineSync.question("Add a new pizza flavor to the pizza list: ");
        pizzaList.push(addFlavor);
        number = parseInt(readlineSync.question("Enter your action's number: "));
    } else if (number == 3){
        let removeFlavor = readlineSync.question("Enter the flavor you want to remove from the pizzaList: ");
        let index = pizzaList.indexOf(removeFlavor);
				if (index > -1) {
					pizzaList.splice(index, 1);
				};
        number = parseInt(readlineSync.question("Enter your action's number: "));
    } else {
        console.log("incorrect input! Choose 1, 2, 3 or 4.");
        number = parseInt(readlineSync.question("Enter your action's number: "));
    }

}
    