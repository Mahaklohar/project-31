class Plinko {
    constructor(x, y){
    var option ={
        isStatic: true
    }

    this.body = Bodies.circle(x, y, 10, option);
    this.radius = 10;
    World.add(world, this.body);
  }

  display(){
      var pos = this.body.position;
      push();
      strokeWeight(1);
      fill("white")
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
      pop();

  }
}