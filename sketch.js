
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var chao;
var quadrado;
var triangolo;
var bola;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var chao2 = {
     isStatic: true
	}
    chao = Bodies.rectangle(0,600,1000,10,chao2)
	World.add(world,chao);
	
    var quadrado2 = {
		isStatic: false,
		restitution:0.7,
		friction:0.01, 
		frictionAir:0.1
	}
    quadrado = Bodies.rectangle(100,100,20,20,quadrado2);
	World.add(world,quadrado);
	var triangolo2 = {
	
		isStatic: false,
		restitution:0.9,
		friction:0.03, 
		frictionAir:0.4
	}
	triangolo = Bodies.rectangle(200,200,50,50,triangolo2);
     World.add(world,triangolo);        
	 var bola2 = {
	
		isStatic: false,
		restitution:0.9,
		friction:0.03, 
		frictionAir:0.4
	}
	bola = Bodies.circle(300,300,30,bola2);
	World.add(world,bola);
}


   

function draw() {
  background("blue");
  Engine.update(engine);
  rect(chao.position.x, chao.position.y,1000,10);

  rect(quadrado.position.x, quadrado.position.y,20,20);

  rect(triangolo.position.x,triangolo.position.y,50,50);

  ellipse(bola.position.x,bola.position.y,30,30);
}
  
