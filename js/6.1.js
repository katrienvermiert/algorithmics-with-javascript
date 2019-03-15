// Exercise 6.1

class Circle {
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    get surface (){
        return Math.PI * Math.pow(this.radius,2);
    }

    move (xOffset, yOffset){
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
}

let newCircle = new Circle (20, 30, 15);
console.log(newCircle.xPos, newCircle.yPos, newCircle.radius);

newCircle.move (30, 30);
console.log(newCircle);

console.log(newCircle.surface);

       