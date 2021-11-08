var canvas;
var canvasContext;

let snake = {
  body: [{x: 100, y: 100}],
  // size: [{width:20, height:20}],
  direction: undefined,
  // length: 2
}
const apple = {
  position: [{x:200 , y:200}],
  // size: [{width:20}, {height:20}],
  // color: 'red'
}

window.onload = function (){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  const gridSize = 4;
  
  var framesPerSecond = 30;
  setInterval(function(){
    gameInitializer()
  }, 10000/framesPerSecond);
}

function gameInitializer(){
    drawGameWindow();
    drawApple();
    changeSnakeDirection();
    moveSnake();
    drawSnake();
    isAppleEaten();
    if (wallDetection()) gameOver();
}

// function placeApple(appleX, appleY){
//   const appleX = Math.floor(Math.random)
//   const appleY = Math.floor(Math.random)
// }

function isAppleEaten(){
  growSnake();
  // var appleEaten
  // console.log(appleEaten)
  // placeApple();
}

function growSnake(){
  let body = snake.body[0];
  let appleX = canvas.width/2;
  let appleY = canvas.height/2;
  if(body.x === appleX && body.y === appleY){
    snake.body.push({}, Object.assign(snake.body[0]));
    console.log('Apple is eaten')
  };
}

function gameOver(positionX, positionY){
  const textWidth = 330;
  const textHeight = 300;
  positionX, positionY = clearInterval();
  drawText('30px Arial', 'orange','Game Over!', textWidth, textHeight)
  
}

function wallDetection(){
  if (snake.body[0].x > canvas.width){ 
    gameOver();
  } 
  if (snake.body[0].x < 0){
    gameOver(); 
  }
  if (snake.body[0].y > canvas.height){
    gameOver(); 
  } 
  if (snake.body[0].y < 0){
    gameOver();
  };
};

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
  for (let i = snake.body.length -1; i > 0; --i){
    console.log(i)
    snake.body[i] = Object.assign({}, snake.body[i-1])
    console.log("The value of i is :" ,i)
  };
  // const speedX = 2;
  // const speedY = 2;
  switch (snake.direction) {
    case "up":
      var positionY = snake.body[0].y -= 20 //+ speedY;
        /*console.log(positionY)*/;
      break;
    case "down":
      var positionY = snake.body[0].y += 20 //+ speedY;
        /*console.log(positionY)*/;
      break;
    case "right":
      var positionX = snake.body[0].x += 20 //+ speedX;
        /*console.log(positionX)*/;
      break;    
    case "left":
      var positionX = snake.body[0].x -= 20 //+ speedX;
        /*console.log(positionX)*/;
      break;
  };
};

//-----------------------------------------
// All Drawing Below
function drawGameWindow(){  
  drawRect(0,0, canvas.width, canvas.height,'black');
};

function drawApple(){
  const appleWidth = 20;
  const appleHeight = 20;
    drawRect(canvas.width/2,canvas.height/2, appleWidth, appleHeight, 'red') 
}

function drawSnake(){
  const snakeWidth = 20;
  const snakeHeight = 20;
  snake.body.forEach((part) => {
    drawRect(part.x, part.y, snakeWidth, snakeHeight, 'green')
  });
  // wallDetection(snakeWidth,snakeHeight)
};

// function gameOverText(text, startCoordinate, endCoordinate){
//   canvasContext.font = '100px orange';
//   canvasContext.fillStyle = 'orange';
//   canvasContext.fillText(text, startCoordinate, endCoordinate)
// };

function drawText(font, color, text, posX, posY){
  
  canvasContext.font = font;
  canvasContext.fillStyle = color;
  canvasContext.fillText(text, posX, posY);
}

function drawRect(posX, posY, width, height, color){
  canvasContext.fillStyle = color;
  canvasContext.fillRect (posX, posY, width, height);
};

// function drawCircle (centerX, centerY, radius, drawColor){
//   canvasContext.fillStyle = drawColor;
//   canvasContext.beginPath();
//   canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
//   // "0" and "Math.PI*2" are the angles in radians around the circle is being drawn.
//   // "true" to draw circle clock or clock-wise circle?
//   canvasContext.fill()
// };