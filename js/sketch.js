var miner, minerImg;
var minerMining;
var diamond, diamond1, diamondImg;
var ladderImg;
var ladder, ladder2, ladder3, ladder4, ladder5, ladder6, ladder7, ladder8;
var edges;
var score = 0;

function preload() {
  bgImg = loadImage("sprites/MinecraftBackground.jpeg");
  minerImg = loadImage("sprites/MinecraftSteve.png");
  minerMining = loadAnimation("sprites/MinecraftMiningUp.png", "sprites/MinecraftMiningDown.png");
  diamondImg = loadImage("sprites/MinecraftDiamond.png");
  ladderImg = loadImage("sprites/MinecraftLadder.png");

}

function setup() {
  createCanvas(1250,700);

  edges = createEdgeSprites();

  miner = createSprite(350, 625);
  miner.addImage(minerImg);
  miner.scale = 0.3;

  ladder1 = new Ladder(350, 645, 50, 300);
  ladder2 = new Ladder(350, 573, 50, 300);
  ladder3 = new Ladder(350, 501, 50, 300);
  ladder4 = new Ladder(350, 429, 50, 300);
  ladder5 = new Ladder(350, 357, 50, 300);
  ladder6 = new Ladder(350, 285, 50, 300);
  ladder7 = new Ladder(350, 213, 50, 300);
  ladder8 = new Ladder(350, 141, 50, 300);

  diamond = new Diamond();


  console.log(miner);
}

function draw() {
  background(bgImg);
  
  miner.bounceOff(edges);
  
  if(keyDown(UP_ARROW) || keyDown("w")) {
    miner.y -= 3;
  }

  if(keyDown(DOWN_ARROW) || keyDown("s")) {
    miner.y += 3;
  }

  if(miner.y > 605) {
    if(keyDown(LEFT_ARROW) || keyDown("a")) {
      miner.x -= 3;
    }

    if(keyDown(RIGHT_ARROW) || keyDown("d")) {
      miner.x += 3;
    }

    if(diamond === null) {
      diamond1 = new Diamond();
      diamond1.display();
    }

  }

  textSize(20);
  fill("white");
  text("Score: "+score, 100, 100);

  ladder1.display();
  ladder2.display();
  ladder3.display();
  ladder4.display();
  ladder5.display();
  ladder6.display();
  ladder7.display();
  ladder8.display();

  diamond.display();
 
  drawSprites();
}