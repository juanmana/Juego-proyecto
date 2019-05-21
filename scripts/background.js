class Background {
  constructor(game, x, y, w, h) {
    this.posX = x;
    this.posY = y;
    this.width = w;
    this.height = h;
    this.game = game;
  }

  drawBackground() {
    this.game.ctx.fillStyle = "darkgreen";
    this.game.ctx.fillRect(0, 560, 840, 45);
    this.game.ctx.fillRect(0, 250, 840, 45);

    //Road
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(0, 435);
    this.game.ctx.lineTo(840, 435);
    this.game.ctx.strokeStyle = "white";
    this.game.ctx.setLineDash([0]);
    this.game.ctx.stroke();

    this.game.ctx.beginPath();
    this.game.ctx.moveTo(0, 480);
    this.game.ctx.lineTo(840, 480);
    this.game.ctx.strokeStyle = "white";
    this.game.ctx.setLineDash([10]);
    this.game.ctx.stroke();

    this.game.ctx.beginPath();
    this.game.ctx.moveTo(0, 530);
    this.game.ctx.lineTo(840, 530);
    this.game.ctx.strokeStyle = "white";
    this.game.ctx.setLineDash([0]);
    this.game.ctx.stroke();

    this.game.ctx.beginPath();
    this.game.ctx.moveTo(0, 390);
    this.game.ctx.lineTo(840, 390);
    this.game.ctx.strokeStyle = "white";
    this.game.ctx.setLineDash([10]);
    this.game.ctx.stroke();

    this.game.ctx.beginPath();
    this.game.ctx.moveTo(0, 345);
    this.game.ctx.lineTo(840, 345);
    this.game.ctx.strokeStyle = "white";
    this.game.ctx.setLineDash([0]);
    this.game.ctx.stroke();

    //Water

    this.game.ctx.fillStyle = "AQUAMARINE";
    this.game.ctx.fillRect(0, 0, 840, 250);

    //player1 / player2
    this.game.ctx.font = "30px Arial";
    this.game.ctx.fillText("Player 1", 30, 30);

    this.game.ctx.fillText("Player 2", 700, 30);
  }
}
