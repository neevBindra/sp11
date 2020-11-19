var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	wall1 = new Wall(width/2,650,200,20);
	wall2 = new Wall(300,610,20,100);
	wall3 = new Wall(500,610,20,100);

  
}


function draw() {
  
  background(0);
  Engine.update( engine);
 
keyPressed();
  drawSprites();
  rectMode(CENTER);
  wall1.display();
 wall2.display();
 wall3.display();
packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 
}

    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.


  
function keyPressed() {
	if (keyDown ("DOWN_ARROW") )
	 { Matter.Body.setStatic(packageBody,false); } 
}




