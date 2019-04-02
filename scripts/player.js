class Player{
constructor(game,x,y){
this.posX = x
this.posY = y
this.life = 3
this.img = new Image();
this.img.src = "./images/up.png"
this.sX = 5
this.sY = 5
this.isDead = false
this.game = game
this.orientation = "UP"
this.maxSpeed = 5

}
 

drawPlayer(){
   
this.game.ctx.drawImage(this.img,this.posX,this.posY,40,40)
}
movePlayer(){
if(this.posX%40!=0)this.posX+=this.sX
else this.sX = 0;
if(this.posY%40!=0)this.posY+=this.sY
else this.sY =0;
}

deadPlayer(){

}


}