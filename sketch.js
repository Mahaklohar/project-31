const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 760, 480, 20);

  for(var i = 0; i<= width; i = i+80){
    divisions.push(new Division(i, height = divisionHeight*2, 10, divisionHeight));
  }
// all the plinkos:
  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var k = 15; k<=width-10; k = k+50){
    plinkos.push(new Plinko(k, 175));
  }

  for(var l = 40; l<=width; l = l+50){
    plinkos.push(new Plinko(l, 275));
  }

  for(var m = 15; m<=width-10; m = m+50){
    plinkos.push(new Plinko(m, 375));
  }
// are here


  Engine.run(engine)
} 
  




function draw() {
  background(0);

  if(frameCount%90 ===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 8))
  }

  ground.display();

  for(var n = 0; n < divisions.length; n++){
    divisions[n].display();
  }

  for(var o = 0; o < plinkos.length; o++){
    plinkos[o].display(); 
  }

  for(var p = 0; p < particles.length; p++){
    particles[p].display(); 
  }


  
  



}