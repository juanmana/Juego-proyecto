class Game{

constructor(w,h){

this.canvas = document.querySelector("#canvas");
this.ctx = this.canvas.getContext('2d')
this.width = w
this.height = h
this.player = new Player(this,this.width/2, this.height/2)
this.obstacles = new Obstacles(this)
this.obstacles.generateObstacles()
this.background = new Background(this,0,0,w,h)

}

clear(){
    this.ctx.clearRect(0,0,this.width,this.height)
}
moveAll(){
    this.player.movePlayer()
    this.obstacles.moveObstacles()
}


setListener(){
document.onkeydown = function(e){
    this.handleKeyDown(e.keyCode)
}.bind(this);
}

drawAll(){
    this.player.drawPlayer()
    this.obstacles.drawObstacles()
    this.background.drawBackground()
}

gameStart(){
    this.interval = setInterval(function(){
        this.clear()
        this.moveAll()
        this.setListener()
        this.drawAll()
    }.bind(this),1000/60);
}
handleKeyDown(key){
switch(key){
    case 38:
    this.keyUp()
    break;
    case 37:
    this.keyLeft()
    break;
    case 39:
    this.keyRight()
    break;
    case 40:
    this.keyDown()
    break;
}
}


}