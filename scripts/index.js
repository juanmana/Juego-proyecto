window.onload = function(){
    var canvas =(document.querySelector("#canvas"))
    var width = 900
    var height = 580
    canvas.setAttribute('height')
    canvas.setAttribute('width')
    var game = new Game(width,height)
    game.gameStart()
}

