// Exercise 4.5
function calcDistance (x1, y1, x2, y2){
    // get distance of x
    xd = x2 - x1;
    // get distance of y
    yd = y2 - y1;
    //pythagorean theorem to calculate distance between two points
    return Math.sqrt((xd * xd) + (yd * yd));
}

console.log(calcDistance(-2, 2, 2, -2));