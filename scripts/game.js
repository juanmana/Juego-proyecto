class Game {

    constructor(w, h) {

        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext('2d')
        this.width = w
        this.height = h
        this.player = new Player(this, 360, 560,'./images/up.png',0)
        this.player2 = new Player(this, 300, 560,'./images/up2.png',0)
        this.obstacles = new Obstacles(this)
        this.trunks =[]
        this.trunks.push(new Trunks(this,320,200))
        this.trunks.push(new Trunks(this,500,140))
        this.trunks.push(new Trunks(this,100,140))

        this.trunks.push(new Trunks(this,300,80))
        this.home =new Home(this,410,0,w,h)


        this.background = new Background(this, 0, 0, w, h)
        this.intervalID;
        this.endGame=false;
        this.winner="";
     
    }

    clear() {
        this.ctx.clearRect(0, 0, 850, 580)
    }

    moveAll() {
        this.player.movePlayer()
        this.player2.movePlayer()
        this.obstacles.moveObstacles()
    }


  

    setListeners() {
        document.onkeydown = function (e) {
            this.handleKeyDown(e.keyCode)
        }.bind(this);
    }

    drawAll() {


        this.background.drawBackground()
        this.trunks.forEach(trunk=>trunk.drawTrunks())
        this.home.drawHome()
        this.player.drawPlayer()
        this.player2.drawPlayer()
        this.obstacles.drawObstacles()


        this.home.drawHomePlayers();

    }

    EndGame(){

        if (this.winner=="Player 1")
        {
            this.ctx.fillStyle= "darkgreen" ;
            this.ctx.fillRect(0, 560, 840, 45);
            this.ctx.fillRect(0, 250, 840, 45);
        }
        else{

            
        }
    }
    gameStart() {

        this.intervalID = setInterval(function () {
            this.obstacles.generateObstacles()


            if (!this.endGame){
            this.clear();
            this.moveAll();
            this.setListeners();
            this.drawAll();
            this.isCollision();
            this.isTrunk()
            this.isTrunk2()
            this.meta()
            }
            else{
                this.clear();
                
                this.EndGame();
            }






        }.bind(this), 1000 / 60)
    }

   

    handleKeyDown(key) {
        switch (key) {
            case 38:
            case 87:
                this.keyUp(key)
                break;
            case 37:
            case 65:
                this.keyLeft(key)
                break;
            case 39:
            case 68:
                this.keyRight(key)
                break;
            case 40:
            case 83:
                this.keyDown(key)
                break;
        }
    }

    keyUp(key) {


        if (key == 38) {
            this.player.img.src = "./images/up.png"
            this.player.orientation = "UP"
            if (this.player.posY > 0) {
                this.player.sY = -this.player.maxSpeed
                this.player.posY += this.player.sY
            }
        } else {
            this.player2.img.src = "./images/up2.png"
            this.player2.orientation = "UP"
            if (this.player2.posY > 0) {
                this.player2.sY = -this.player2.maxSpeed
                this.player2.posY += this.player2.sY
            }

        }
    }




    keyLeft(key) {

        if (key == 37) {
            this.player.img.src = "./images/left.png"
            this.player.orientation = "LEFT"
            if (this.player.posX > 0) {


                this.player.sX = -this.player.maxSpeed
                this.player.posX += this.player.sX

            }
        } else {
            this.player2.img.src = "./images/left2.png"
            this.player2.orientation = "LEFT"
            if (this.player2.posX > 0) {


                this.player2.sX = -this.player2.maxSpeed
                this.player2.posX += this.player2.sX

            }
        }


    }



    keyRight(key)

    {
        if (key == 39) {
            this.player.img.src = "./images/right.png"
            this.player.orientation = "RIGHT"
            if (this.player.posX < 780) {
                this.player.sX = this.player.maxSpeed
                this.player.posX += this.player.sX
            }
        } else {
            this.player2.img.src = "./images/right2.png"
            this.player2.orientation = "RIGHT"
            if (this.player2.posX < 780) {
                this.player2.sX = this.player2.maxSpeed
                this.player2.posX += this.player2.sX
            }
        }


    }

    keyDown(key) {

        if (key == 40) {
            this.player.img.src = "./images/down.png"
            this.player.orientation = "DOWN"
            if (this.player.posY < 560) {
                this.player.sY = this.player.maxSpeed
                this.player.posY += this.player.sY
            }
        } else {
            this.player2.img.src = "./images/down2.png"
            this.player2.orientation = "DOWN"
            if (this.player2.posY < 560) {
                this.player2.sY = this.player2.maxSpeed
                this.player2.posY += this.player2.sY
            }
        }


    }

    isTrunk2() {
        var died = true;
        if (this.player2.posY < 240 && !this.player.onTheMove) {
            this.trunks.forEach(trunk => {
                if (this.player2.posX < trunk.posX + 250 &&
                    this.player2.posX + 40 > trunk.posX &&
                    this.player2.posY < trunk.posY + 40 &&
                    this.player2.posY + 40> trunk.posY) {

                  
                    died = false

                }
              
            })
            if (died){
             
        this.player2 = new Player(this, 300, 560,'./images/up2.png',this.player2.goals)
            }
            
        }
    }
        









meta(){

    if (this.player.posX < this.home.posX + 70 &&
        this.player.posX + 40 >this.home.posX &&
        this.player.posY < this.home.posY + 70 &&
        this.player.posY + 40> this.home.posY) {

            if (this.player.posY==40&&this.player.posX<=440&&this.player.posX>=400)
                this.player.goals++;
                if(this.player.goals==3) 
                {this.winner="Player 1"
                    this.endGame=true;}
    
    

}
if (this.player2.posX < this.home.posX + 70 &&
    this.player2.posX + 40 >this.home.posX &&
    this.player2.posY < this.home.posY + 70 &&
    this.player2.posY + 40> this.home.posY) {

        if (this.player2.posY==45&&this.player2.posX<=440&&this.player2.posX>=400)

        this.player2.goals++
        if(this.player.goals==3){ 
            this.winner="Player 2"
            this.endGame=true;
        
        }

      




}}







    isTrunk() {
        var died = true;
        if (this.player.posY < 240 && !this.player.onTheMove) {
            this.trunks.forEach(trunk => {
                if (this.player.posX < trunk.posX + 250 &&
                    this.player.posX + 40 > trunk.posX &&
                    this.player.posY < trunk.posY + 40 &&
                    this.player.posY + 40> trunk.posY) {

                  
                    died = false

                }
              
            })
            if (died){
                this.player = new Player(this, 360, 560,'./images/up.png',this.player.goals)
            }
            
        }
    }
            
    

    isCollision(){

 for(var i = 0; i < this.obstacles.listObstacles.length ;i++ ){


    if(this.obstacles.listObstacles[i].posX < this.player.posX + this.player.width &&
       this.player.posX < this.obstacles.listObstacles[i].posX + this.obstacles.listObstacles[i].width&&
           this.obstacles.listObstacles[i].posY < this.player.posY +  this.player.height &&  
           this.player.posY < this.obstacles.listObstacles[i].posY +this.obstacles.listObstacles[i].height)
            {
                this.player = new Player(this, 360, 560,'./images/up.png',this.player.goals)
            }

    if(this.obstacles.listObstacles[i].posX < this.player2.posX + this.player2.width &&
        this.player2.posX < this.obstacles.listObstacles[i].posX + this.obstacles.listObstacles[i].width&&
            this.obstacles.listObstacles[i].posY < this.player2.posY +  this.player2.height &&  
            this.player2.posY < this.obstacles.listObstacles[i].posY +this.obstacles.listObstacles[i].height)
             {
                this.player2 = new Player(this, 300, 560,'./images/up2.png',this.player2.goals)
             }
        }
    }

    

}