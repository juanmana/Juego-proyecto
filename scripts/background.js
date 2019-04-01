class Background{
    
    constructor(game,x,y,w,h){
        this.posX = x
        this.posY = y
        this.witdh = w
        this.height = h
        this.game = game
    }

    drawBackground(){
        this.ctx.fillStyle= "darkgreen" ;
        this.ctx.fillRect(0, 480, 850, 45);
        this.ctx.fillRect(0, 250, 850, 45);
    
    
        //carretera
        ctx.beginPath();
        ctx.moveTo(0,435);
        ctx.lineTo(850,435);
        ctx.strokeStyle = "white";
        ctx.setLineDash([10]);
        ctx.stroke();
    
    
        ctx.beginPath();
        ctx.moveTo(0,390);
        ctx.lineTo(850,390);
        ctx.strokeStyle = "white";
        ctx.setLineDash([0]);
        ctx.stroke();
    
    
        ctx.beginPath();
        ctx.moveTo(0,345);
        ctx.lineTo(850,345);
        ctx.strokeStyle = "white";
        ctx.setLineDash([10]);
        ctx.stroke();
    
    //agua
    
    ctx.fillStyle ="AQUAMARINE";
    ctx.fillRect(0,0,850,250)
    }





}