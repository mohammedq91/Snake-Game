var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;

window.onload = function (){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 30;
  setInterval(function(){
    drawEverything();
    moveSnake();
  }, 1000/framesPerSecond);
  
}

function drawEverything(){
  moveSnake()
  
  colorRect(0,0, canvas.width, canvas.height,'black');
  colorRect(ballX, canvas.height/3, 30, 30,'red');
  colorCircle(ballX,canvas.height/2, 30, 30, 'green');
  
  // colorCircle(canvas.width/3,canvas.height/2, 30, 30, 'red');
  
  // canvasContext.fillStyle = 'red';
  // canvasContext.fillRect(canvas.width/3,canvas.height/2, 30, 30)
}

function colorRect(leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect (leftX, topY, width, height);
}

function colorCircle (centerX, centerY, radius, drawCircle){
  canvasContext.fillStyle = drawCircle;
  canvasContext.beginPath();
  var drawCircle = canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
  // return drawCircle[Math.random()]

  // centerX and centerY are the x & y position of the center of drawn circle.
  // 0 and Math.PI*2 are the angles in radians around the circle is being drawn.
  canvasContext.fill()
};

function moveSnake(){
  ballX += 5;
  ballY += 5;

  if (ballX > canvas.width){
    // alert('Game is over!')
    gameOver();
  } 
  if (ballX < 0){
    // alert('Game is over!')
    gameOver();
  }
  if (ballY > canvas.height){
    // alert('Game is over!')
    gameOver();
  } 
  if (ballX < 0){
    // alert('Game is over!')
    gameOver();
  }
}

function gameOver(){
  colorRect(100, 100, canvas.width/2, canvas.height/2, 'white');
  // alert('Game is over!')
}

function moveObject () {
  canvas.addEventListener("keydown", function(e){
    if(e.key === 40){
      ballY += ballY;
      console.log('You clicked me!')
    }
  })
}




// move snake object with keyboard 
// display apple randomly on window if/when snake eats an apple

// function moveApple (canvas){
//   if(ballX & ballY === ){
//     for (position of canvas){
//     }
//   }
//   displayApple = Math.random
// }