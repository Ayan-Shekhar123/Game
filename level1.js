class Level1 {
    constructor() { this.ground = createSprite(700, displayWidth, 20, this.hero); }
    display() {
        console.log("level1display");
        hero = createSprite(20, displayWidth, 20)
        this.jump();
    }jump(){
        if (keyDown(UP_ARROW)){
            hero.y-=5;
        }
        if (keyDown(DOWN_ARROW)){
            hero.y+=5;
        }
        if (keyDown(LEFT_ARROW)){
            hero.x-=5;
        }
        if (keyDown(RIGHT_ARROW)){
            hero.x+=5;
        }
    }
}
