class Obstacle{
    constructor(game){
        this.posX = 0
        this.posY = 450
        this.witdh = undefined
        this.height = undefined
        this.img =new Image()
        this.img.src = "./images/car1.png"
        this.game = game
    }

   


    drawObstacle(){
     this.game.ctx.drawImage(this.img,this.posX,this.posY,94,45)
    }

    moveObstacle(){
      if(this.posX < 900){
     this.posX +=5}
    }
}