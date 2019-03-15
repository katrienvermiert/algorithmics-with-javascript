/* Exercise 3.3*/
//.push method
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];
arr2.push(arr1);

console.log(arr2);

//spread operator
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [... arr1];

console.log(arr2);