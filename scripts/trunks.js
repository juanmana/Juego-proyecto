class Trunks {
  constructor(game, x, y, width, height) {
    this.posX = x;
    this.posY = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = "./images/tronco.png";
    this.img1 = new Image();
    this.img1.src = "./images/si.png";
    this.game = game;
    this.lisTrunk = [];
  }

  drawTrunks() {
    this.game.ctx.drawImage(this.img, this.posX, this.posY, 250, 40);
  }
}
