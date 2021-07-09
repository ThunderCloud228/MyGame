class Ladder 
{
    constructor(x, y, w, h) {
        this.ladder = createSprite(x, y, w, h);
        this.ladder.addImage(ladderImg);
    }

    display() {
        var lmao = this.ladder;

        lmao.scale = 0.5;
        lmao.x = miner.x;

        drawSprites();
    }
}