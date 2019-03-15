// Exercise 6.3
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

let objects = [];
// going through array
for (i = 0; i < 20; i++) {
    topLeftXPos = Math.floor(Math.random() * 100) + (-100);
    topLeftYPos = Math.floor(Math.random() * 100) + (-100);
    width = Math.floor(Math.random() * 20) + 5;
    length = Math.floor(Math.random() * 20) + 5;
// add new rectangles to objects array
    objects.push(new Rectangle(topLeftXPos, topLeftYPos, width, length));
}

console.log(objects);

let collision = [];
// going through array and comparing rectangles to eachother
for (j = 0; j < objects.length; j++){
    for (k = j + 1; k < objects.length; k++){
        // condition to determine if overlapping rectangles should be added to array
        if (objects[j].collides(objects[k]) == true){
            while (!collision.includes(objects[k])){
                collision.push(objects[k])
            };
        };
    };
};

console.log(collision);
