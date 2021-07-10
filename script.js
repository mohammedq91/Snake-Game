var canvas;
var canvasContext;
var appleX = 100;

let snake = {
  body: [{x: 50, y: 50}],
  direction: undefined,
}
//, {x: 50, y: 70}, {x: 50, y: 90}

window.onload = function (){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  drawGameWindow();

  var framesPerSecond = 30;
  setInterval(function(){
    changeSnakeDirection();
    
  }, 1000/framesPerSecond);
  drawSnake();
  drawApple(appleX,canvas.height/3, 10, 'red');
  
    // gameOver();
}

function drawSnake(){
  snake.body.forEach((part) => {
    colorRect(part.x, part.y, 20, 20, 'green')
  });
};

function changeSnakeDirection () {
  document.onkeydown = function(e){

    var keyboard = e.key;
    
    if(keyboard === 'ArrowUp'){
      console.log('Arrow up is clicked!')
      snake.direction = "up";
      console.log(snake.direction)
    };
    if(keyboard === 'ArrowDown'){
      console.log('Arrow down is clicked!')
      snake.direction = "down";
      
    };
    if(keyboard === 'ArrowRight'){
      console.log('Arrow right is clicked!')
      snake.direction = "right";
    };
    if(keyboard === 'ArrowLeft'){
      console.log('Arrow left is clicked!')
      snake.direction = "left";
    };
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

function gameOver(){
  snakeX += 5;
  snakeY += 5;

  if (snakeX >= canvas.width){
    snakeReset();
    canvasText((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
    
  } 
  if (snakeX < 0){
    snakeReset();
    canvasText((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  }
  if (snakeY > canvas.height){
    snakeReset();
    canvasText((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  } 
  if (snakeY < 0){
    snakeReset();
    canvasText((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  };
};

// all drawing below
function drawGameWindow(){  
  colorRect(0,0, canvas.width, canvas.height,'black');
};

function drawApple (centerX, centerY, radius, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  var drawCircle = canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
  // 0 and Math.PI*2 are the angles in radians around the circle is being drawn.
  // true to draw 
  canvasContext.fill()
};

function canvasText(startCoordinate, endCoordinate, text, textColor){
  const canvas = document.querySelector('#gameCanvas')
  const canvasContext = canvas.getContext('2d')

  colorRect((canvas.width/2)-100, (canvas.height/2)-100, 200, 200, 'white');

  canvasContext.font = '30px orange'
  canvasContext.fillStyle = textColor;
  canvasContext.fillText(text, startCoordinate, endCoordinate)
};

function colorRect(leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect (leftX, topY, width, height);
};
