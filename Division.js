class Division {
    constructor(x, y, width, height) {
        var option ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);        
    }

    display(){
        var pos = this.body.position;

        push();
        stroke("Black");
        strokeWeight(1);
        fill("white")
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}