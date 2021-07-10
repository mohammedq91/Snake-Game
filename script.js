var canvas;
var canvasContext;

let snake = {
  body: [{x: 100, y: 100}],
  direction: undefined,
}
//, {x: 50, y: 70}, {x: 50, y: 90}

window.onload = function (){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  

  var framesPerSecond = 30;
  setInterval(function(){
    drawGameWindow();

    const appleRa


    drawApple(canvas.width/2,canvas.height/2, 10, 'red');
    drawSnake();
    changeSnakeDirection();
    moveSnake();
    // gameOver();
    
  }, 10000/framesPerSecond);
  wallDetection();
}

function changeSnakeDirection () {
  document.onkeydown = function(e){
    var keyboard = e.key;
    
    if(keyboard === 'ArrowUp') snake.direction = "up";
    if(keyboard === 'ArrowDown') snake.direction = "down"; 
    if(keyboard === 'ArrowRight') snake.direction = "right";
    if(keyboard === 'ArrowLeft') snake.direction = "left";
  };
};

function moveSnake(){
  switch (snake.direction) {
    case "up":
      snake.body[0].y -= 20;
      break;
    case "down":
      snake.body[0].y += 20;
      break;
    case "right":
      snake.body[0].x += 20;
      break;    
    case "left":
      snake.body[0].x -= 20;
      break;
  };
};

function wallDetection(){
  // snake.body.x += 5;
  // snake.body.y += 5;

  if (snake.body[0].x > canvas.width){
    // snakeReset();
    gameOver((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  } 
  if (snake.body[0].x < 0){
    // snakeReset();
    gameOver((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  }
  if (snake.body[0].y > canvas.height){
    // snakeReset();
    gameOver((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  } 
  if (snake.body[0].y < 0){
    // snakeReset();
    gameOver((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  };
};

function gameOver(startCoordinate, endCoordinate, text, textColor){
  const canvas = document.querySelector('#gameCanvas')
  const canvasContext = canvas.getContext('2d')

  const rectWidth = 200;
  const rectHeight = 200;

  drawRect((canvas.width/2)-100, (canvas.height/2)-100, rectWidth, rectHeight, 'white');

  canvasContext.font = '30px orange'
  canvasContext.fillStyle = textColor;
  canvasContext.fillText(text, startCoordinate, endCoordinate)
};

// all drawing below
//---------------------------------
function drawGameWindow(){  
  drawRect(0,0, canvas.width, canvas.height,'black');
};

function drawApple (centerX, centerY, radius, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
  // 0 and Math.PI*2 are the angles in radians around the circle is being drawn.
  // true to draw circle clock or clock-wise circle?
  canvasContext.fill()
};

function drawSnake(){
  const snakeWidth = 20;
  const snakeHeight = 20;
  snake.body.forEach((part) => {
    drawRect(part.x, part.y, snakeWidth, snakeHeight, 'green')
  });
};

function drawRect(leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect (leftX, topY, width, height);
};
