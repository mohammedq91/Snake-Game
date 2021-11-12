let canvas = document.getElementById('gameCanvas');
let canvasContext = canvas.getContext('2d');
const gridSize = 20;
let timer;

let snake = {
  head: [{x: 100, y: 100}],
  // speed: [{x: 0, y: 0}],
  // body: [{x: snake.head.x , y: snake.head.y}],
  direction: undefined
}

let apple = {
  x:  Math.floor(Math.random() * (canvas.width - gridSize)/20) * 20 , 
  y:  Math.floor(Math.random() * (canvas.height - gridSize)/20) * 20
}

const gameSettings = {
  isGameRunning: 0,
  snakeSize: 20

}
console.log("Apple random coordinates is :", apple.x, apple.y)

window.onload = function (){  
  var framesPerSecond = 20;
  setInterval(function(){
    gameInitializer()
  }, 4000/framesPerSecond);
}

function gameInitializer(){
    drawGameWindow();
    drawApple();
    changeSnakeDirection();
    moveSnake();
    drawSnake();
    isAppleEaten();
    if (is_Snake_Hitting_Wall()) gameOver();
}

function placeApple(){
    apple = { x: Math.floor(Math.random() * (canvas.width - gridSize)/20) * 20 , 
              y: Math.floor(Math.random() * (canvas.height - gridSize)/20) * 20}
}

function isAppleEaten(){
  let head = snake.head[0];
  if(head.x === apple.x && head.y === apple.y){
    growSnake();
    placeApple();
  };
}

function growSnake(){
  const body = snake.head[0] // const body = {x: snake.head.x , y: snake.head.y} 
  snake.head.push(body)
}

function changeSnakeDirection () {
  document.onkeydown = function(e){
    var keyboard = e.key;
    // if(keyboard === ' ') gameInitializer();
    if(keyboard === 'ArrowUp' && snake.direction != "down") snake.direction = "up";
    if(keyboard === 'ArrowDown' && snake.direction != "up") snake.direction = "down"; 
    if(keyboard === 'ArrowRight' && snake.direction != "left") snake.direction = "right";
    if(keyboard === 'ArrowLeft' && snake.direction != "right") snake.direction = "left";
  };
};

function moveSnake(){
  for (let i = snake.head.length -1; i > 0; --i){
    snake.head[i] = Object.assign({}, snake.head[i-1])
  };
  switch (snake.direction) {
    case "up":
      snake.head[0].y -= gridSize;
      break;
    case "down":
      snake.head[0].y += gridSize;
      break;
    case "right":
      snake.head[0].x += gridSize;
      break;    
    case "left":
      snake.head[0].x -= gridSize;
      break;
  };
};

function is_Snake_Hitting_Wall(){
  if (snake.head[0].x === canvas.width ||
      snake.head[0].x < 0 ||
      snake.head[0].y >= canvas.height || 
      snake.head[0].y < 0
      ){
        console.log('You have hit the wall!')
        gameOver(); 
  };
};

function gameOver(){

  clearInterval(moveSnake());
  // snake.head[0].x = snake.head[0].x
  // snake.head[0].y = snake.head[0].y

  // clearInterval(gameSettings.isGameRunning);
   
  // if (gameSettings.isGameRunning){
  // };

  // return (snake.head[0].x == 0 || snake.head[0].x == canvas.window ||
  //        snake.head[0].y == 0 || snake.head[0].y == canvas.height)
  // const textWidth = textHeight = 300;
  // drawText('30px Arial', 'orange','Game Over!', textWidth, textHeight)
}
//-----------------All Drawing Below ------------------------------------
function drawGameWindow(){  
  drawRect(0,0, canvas.width, canvas.height,'saddlebrown');
};

function drawApple(){
    drawRect(apple.x, apple.y , gridSize, gridSize, 'green') 
}

function drawSnake(){
  snake.head.forEach((part) => {
    drawRect(part.x, part.y, gridSize, gridSize, 'black')
  });
};

function drawText(font, color, text, posX, posY){
  canvasContext.font = font;
  canvasContext.fillStyle = color;
  canvasContext.fillText(text, posX, posY);
}

function drawRect(posX, posY, width, height, color){
  canvasContext.fillStyle = color;
  canvasContext.fillRect (posX, posY, width, height);
};

// function gameOverText(text, startCoordinate, endCoordinate){
//   canvasContext.font = '100px orange';
//   canvasContext.fillStyle = 'orange';
//   canvasContext.fillText(text, startCoordinate, endCoordinate)
// };

// function drawCircle (centerX, centerY, radius, drawColor){
//   canvasContext.fillStyle = drawColor;
//   canvasContext.beginPath();
//   canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
//   // "0" and "Math.PI*2" are the angles in radians around the circle is being drawn.
//   // "true" to draw circle clock or clock-wise circle?
//   canvasContext.fill()
// };
