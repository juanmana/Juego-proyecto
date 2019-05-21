class Obstacle {
  constructor(game, speed, x, y, img, width, height, orientation) {
    this.posX = x;
    this.posY = y;
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = img;
    this.game = game;
    this.speed = speed;
    this.orientation = orientation;
  }

  drawObstacle() {
    this.game.ctx.drawImage(
      this.img,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  moveObstacle() {
    if (this.orientation == "RIGHT") {
      this.posX += this.speed;
    } else {
      this.posX -= this.speed;
    }
    this.speed += 0.03;
  }
}
