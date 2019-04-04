class Home{
    constructor(game,x,y,width,height,){
        this.posX = x
        this.posY = y
        this.width = width
        this.height = height
        this.img =new Image()
        this.img.src = "./images/si.png"
        this.game = game
        
      
    }

    drawHome(){

        this.game.ctx.drawImage(this.img,this.posX,this.posY,75,75)
        
 
    }
   
    drawHomePlayers(){

        for(var i=0;i<this.game.player.goals;i++)
        this.game.ctx.drawImage(this.img,30+i*40,50,30,30)

        for(var i=0;i<this.game.player2.goals;i++)
        this.game.ctx.drawImage(this.img,700+i*40,50,30,30)
    }
    
}