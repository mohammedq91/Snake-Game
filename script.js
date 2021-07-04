var canvas;
var canvasContext;
var snakeX = 50;
var snakeY = 20;

var appleX = 100;

window.onload = function (){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 30;
  setInterval(function(){
    drawEverything();
    moveSnake();
    
  }, 1000/framesPerSecond);

  changeSnakeDirection();
}

function drawEverything(){  
  colorRect(0,0, canvas.width, canvas.height,'black');
  colorRect(snakeX, canvas.height/2, 20, 20,'green');
  colorCircle(appleX,canvas.height/3, 10, 'red');
}

function colorRect(leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect (leftX, topY, width, height);
}

function colorCircle (centerX, centerY, radius, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  var drawCircle = canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
  // 0 and Math.PI*2 are the angles in radians around the circle is being drawn.
  // true to draw 
  canvasContext.fill()
};

function moveSnake(){
  snakeX += 5;
  snakeY += 5;

  if (snakeX >= canvas.width){
    // alert('Game is over!')
    snakeReset();
    //endGame();
    
  } 
  if (snakeX < 0){
    // alert('Game is over!')
    snakeReset();
    //endGame();
  }
  if (snakeY > canvas.height){
    // alert('Game is over!')
    snakeReset();
    //endGame();
  } 
  if (snakeY < 0){
    // alert('Game is over!')
    snakeReset();
    //endGame();
  }

  // endGame();
}

function snakeReset (){
  const ballx = snakeX;
}

function changeSnakeDirection () {
  document.onkeydown = function(e){
    if(e.key === '40'){
      snakeY += snakeY
      console.log('You clicked me!')
    }

    // if(e.keyCode === 37){
    //   snakeX = -snakeX
    // }
  };
}

// up 38
// down 40
// right 39
// left 37



// if the snake moves to the right/east
  // option 1, move the snake to north
  // optoin 2, move the snake to south

//if the snake is moving to the left/west
  // option 1, move the snake to north
  // optoin 2, move the snake to south 

// if the snake is moving to the up/north
  // option 1, move the snake to the right
  // option 2, move the snake to the left

// if the snake is moving to the down/south
  // option 1, move the snake to the right
  // option 2, move the snake to the left



// function endGame(){
//   colorRect((canvas.width/2)-100, (canvas.height/2)-100, 200, 200, 'white');
// }



// move snake object with keyboard 
// display apple randomly on window if/when snake eats an apple

// function appleResetPosition (canvas){
//   if(ballX & ballY === ){
//     for (position of canvas){
//     }
//   }
//   displayApple = Math.random

// return drawCircle[Math.random()]

// }