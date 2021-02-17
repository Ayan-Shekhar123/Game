var level = 0;
var level1;
var playButton;
function setup() {
  createCanvas(displayWidth, displayHeight);
  playButton = createSprite(400, 200, 50, 50);
  playButton.visible = false;
  level1 = new Level1();
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  textSize(30);

  if (level === 0) {
    playButton.visible = true;
    if (mousePressedOver(playButton)) { level = 1 }
    text("title", 400, 400);
  } if (level === 1) {
    level1.display();
    playButton.visible = false;
  }
}