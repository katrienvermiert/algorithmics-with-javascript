// Exercise 4.4
const readlineSync = require("readline-sync");
let arr = [];
let n = parseInt(readlineSync.question("Enter a number: "));

function multiRand(n){
    for(i = 0; i < n; i++){
        arr.push(Math.floor(Math.random() * 1000) + 1);
    }
    return arr
}

function average(arr){
    total = 0;
    for (i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total/arr.length;
}

function min(arr){
    return Math.min(... arr);
}

function max(arr){
    return Math.max(... arr);
}

function call(){
console.log(multiRand(n));
console.log(min(arr));
console.log(max(arr));
console.log(average(arr));

}

call();