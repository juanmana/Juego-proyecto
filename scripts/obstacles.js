class Obstacles{
    constructor(game){
        this.game = game
       
        this.listObstacles = []
    }


     drawObstacles(){
         this.listObstacles.forEach(obstacle=>{
        obstacle.drawObstacle()
         })
     }


     generateObstacles(){

        if(this.listObstacles.length<7){
       var numObstacle = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
       var obstacle;
        switch(numObstacle){
          case 1:
          obstacle =this.createObstacle1()
        break;
        case 2:
        obstacle=this.createObstacle2()
         break;
         case 3:
         obstacle=this.createObstacle3()
       break;
       case 4:
       obstacle=this.createObstacle4()
        break;
        case 5:
        obstacle=this.createObstacle5()
        break;
        }
     if (this.canRoad(obstacle))   
     this.listObstacles.push(obstacle)
     }
    }

     //game,speed,x,y,img,width,height

     createObstacle1(){
        var data= this.generatePosition()
     var obstacle = new Obstacle(this.game,5,data.x,data.y,"./images/obstacle1.png", 97,44,data.orientation)
     return obstacle
     }
     createObstacle2(){
        var data= this.generatePosition()
        var obstacle = new Obstacle(this.game,4,data.x,data.y,"./images/obstacle2.png", 90,42,data.orientation)
         return obstacle
    
    }   
    createObstacle3(){
        var data= this.generatePosition()
        var obstacle = new Obstacle(this.game,3,data.x,data.y,"./images/obstacle3.png", 94,45,data.orientation)
     return obstacle
    }
    createObstacle4(){
        var data= this.generatePosition()
        var obstacle = new Obstacle(this.game,2,data.x,data.y,"./images/obstacle4.png", 208,47,data.orientation)
    return obstacle
    }
    createObstacle5(){
        var data= this.generatePosition()
        var obstacle = new Obstacle(this.game,1,data.x,data.y,"./images/obstacle5.png", 127,42,data.orientation)
   return obstacle
    }


        generatePosition(){
            var x = 1050 *Math.floor(Math.random() *(2))
          
            if(x == 0){
               var orientation = "RIGHT" 
            }else{
                var orientation = "LEFT"
            }
             var y = Math.floor(Math.random() *(3-0)) 
   
                  switch(y){
                      case 0:
                      y = 300
                      break;
                      case 1:
                      y = 390
                      break;
                      case 2:
                      y = 486
                      break;
                  }
   
                  return({x,y,orientation})
        }


     moveObstacles(){
           this.listObstacles.forEach(obstacle => {
             obstacle.moveObstacle()
           });
          this.listObstacles = this.listObstacles.filter(obstacle=> {
              return (obstacle.posX > - obstacle.width*2 && obstacle.posX < 1200)
     })

    }

    canRoad(obstacle){

        for(var i=0;i<this.listObstacles.length;i++){
            if (obstacle.posY == this.listObstacles[i].posY && obstacle.orientation!=this.listObstacles[i].orientation)
                return false
            
            if (obstacle.posY == this.listObstacles[i].posY && obstacle.orientation==this.listObstacles[i].orientation && obstacle.speed>this.listObstacles[i].speed)
                return false    
        }
        return true;

    }
}