// Exercise 4.3
// function to create array of random numbers
function multiRand (n){

    // declare variable to be array
    let n = [];

    //loop to add 5 random numbers
    for(i = 0; i < 5; i++){
        n.push(Math.floor(Math.random() * 10) + 1);
    }
    return n
}

//call function and log to console
console.log(multiRand());