class Background{
    
    constructor(game,x,y,w,h){
        this.posX = x
        this.posY = y
        this.witdh = w
        this.height = h
        this.game = game
    }

    drawBackground(){
        this.game.ctx.fillStyle= "darkgreen" ;
        this.game.ctx.fillRect(0, 560, 840, 45);
        this.game.ctx.fillRect(0, 250, 840, 45);
    
    
        //carretera
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(0,435);
        this.game.ctx.lineTo(840,435);
        this.game.ctx.strokeStyle = "white";
        this.game.ctx.setLineDash([10]);
        this.game.ctx.stroke();
    
    
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(0,390);
        this.game.ctx.lineTo(840,390);
        this.game.ctx.strokeStyle = "white";
        this.game.ctx.setLineDash([0]);
        this.game.ctx.stroke();
    
    
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(0,345);
        this.game.ctx.lineTo(840,345);
        this.game.ctx.strokeStyle = "white";
        this.game.ctx.setLineDash([10]);
        this.game.ctx.stroke();
    
    //agua
    
    this.game.ctx.fillStyle ="AQUAMARINE";
    this.game.ctx.fillRect(0,0,840,250)
    }





}