window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    var canvas = document.querySelector("#canvas");
    var width = 840;
    var height = 600;
    canvas.setAttribute("height", height);
    canvas.setAttribute("width", width);
    var game = new Game(width, height);
    game.gameStart();
  };
};
