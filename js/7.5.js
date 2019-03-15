// Exercise 7.5
let arr = [7, 12, 4, 9, 3, 10, 8, 2, 11, 6, 5, 1];

function sort(array) {
    let complete = false;

    while (!complete) {
        complete = true;
        for (i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                complete = false;
                let temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
            }
        }
    }

    return array;
}

console.log(arr);
console.log(sort(arr));

