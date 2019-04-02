class Game{

constructor(w,h){

this.canvas = document.querySelector("#canvas");
this.ctx = this.canvas.getContext('2d')
this.width = w
this.height = h
this.player = new Player(this,360, 560)
//this.obstacles = new Obstacles(this)
//this.obstacles.generateObstacles()
this.obstacle = new Obstacle(this,this.posY)
this.background = new Background(this,0,0,w,h)
this.intervalID;

}

clear(){
    this.ctx.clearRect(0, 0, 850,580)
}

moveAll(){
    this.player.movePlayer()
    //this.obstacles.moveObstacles()
    this.obstacle.moveObstacle()
}


setListeners(){
document.onkeydown = function(e){
    this.handleKeyDown(e.keyCode)
}.bind(this);
}

drawAll(){
      
    this.obstacle.drawObstacle()
    //this.obstacles.drawObstacles()
    this.background.drawBackground()
     this.player.drawPlayer()
}

gameStart(){

    this.intervalID = setInterval(function () {
        this.clear();
        this.moveAll();
        this.setListeners();
        this.drawAll();
      
             

       
    }.bind(this), 1000/60)
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

keyUp(){
    this.player.img.src = "./images/up.png"
    this.player.orientation = "UP"
    if(this.player.posY > 0){
    this.player.sY = - this.player.maxSpeed
    this.player.posY += this.player.sY
    }
}
keyLeft(){
this.player.img.src = "./images/left.png"
this.player.orientation = "LEFT"
if(this.player.posX > 0){


this.player.sX = - this.player.maxSpeed
this.player.posX += this.player.sX

}
}

keyRight(){
    this.player.img.src = "./images/right.png"
    this.player.orientation = "RIGHT"
    if(this.player.posX < 780){
    this.player.sX =  this.player.maxSpeed
    this.player.posX += this.player.sX
}}

keyDown(){
    this.player.img.src = "./images/down.png"
    this.player.orientation = "DOWN"
    if(this.player.posY < 560){
    this.player.sY =  this.player.maxSpeed
    this.player.posY += this.player.sY
}}

}