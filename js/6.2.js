// Exercise 6.2
class Rectangle {
    constructor(topLeftXPos,topLeftYPos,width,lenght){
        
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;
    }

    collides(otherRectangle){
        if( (this.topLeftXPos <= otherRectangle.topLeftXPos &&
            this.topLeftXPos+this.width >= otherRectangle.topLeftXPos) ||
            (this.topLeftXPos <= otherRectangle.topLeftXPos+otherRectangle.width &&
            this.topLeftXPos+this.width >= otherRectangle.topLeftXPos+otherRectangle.width) &&
            (this.topLeftYPos <= otherRectangle.topLeftYPos &&
            this.topLeftYPos+this.lenght >= otherRectangle.topLeftYPos) ||
            (this.topLeftYPos <= otherRectangle.topLeftYPos+otherRectangle.lenght &&
            this.topLeftYPos+this.lenght >= otherRectangle.topLeftYPos+otherRectangle.lenght)){
            
                return true;
            
        } else {

            return false;
            
        }
    }
}

let object1 = new Rectangle(0,0,40,30);
let object2 = new Rectangle(10,25,400,300);

let object3 = new Rectangle(0,0,40,30);
let object4 = new Rectangle(100,250,400,300);

object1.collides(object2);
console.log(object1.collides(object2));

object3.collides(object4);
console.log(object3.collides(object4));


