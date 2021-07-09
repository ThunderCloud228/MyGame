class Diamond 
{
    constructor() {
        this.diamond = createSprite(Math.round(random(50, 1200)), Math.round(random(50, 500)));
        this.diamond.addImage(diamondImg);
    }

    display() {
        var precious = this.diamond;

        precious.scale = 0.3;

        if(miner.isTouching(precious)) {
            precious.destroy();
            score++;
            diamond1 = new Diamond();
        }

        drawSprites();
    }
}   