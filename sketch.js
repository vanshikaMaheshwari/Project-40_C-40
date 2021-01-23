var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  lionimg = loadImage("images/Lion.png");
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  pg = createGraphics(100,100);
  fruitGroup = new Group();
}

function draw() {
  background(back_img);

  stroke(206, 0, 118)
  fill(206, 0, 118);
  ellipse(500,144,650,120);
  
  Lion = createSprite(910,500,50,50);
  Lion.addImage(lionimg);
  Lion.scale = 0.3;

  pg.background(250, 159, 95);
  pg.noStroke();
  pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);
  image(pg, 0, 0, 50, 50);
  image(pg, 50, 50);
  image(pg, 0, 550, 50, 50);
  image(pg, 50, 450);
  image(pg, 950, 550, 50, 50);
  image(pg, 850, 450);
  image(pg, 950, 0, 50, 50);
  image(pg, 850, 50);

  // Add conditions for gameStates and playerCount
  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
    fill(230, 0, 145);
    textFont("Fantasy");
    textSize(50);
    text("Collect As Many Fruits As You Can!!",175,50);
  }
}