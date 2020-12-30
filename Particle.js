class Particle{
    constructor(x, y, radius){
        var option ={
            isStatic: false,
            restitution: 0.4
        }

        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius;
        this.color =  color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        noStroke();

        fill(this.color);

        ellipseMode(CENTER);
        ellipse(0, 0, this.radius*2, this.radius*2)
        pop();        
    }
}