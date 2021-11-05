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
    
    if (wallDetection()){
      alert('game is alert');
      console.log('You clicked me')
      // gameOverText();
    };
}

function placeApple(){
  return apple.position.x = Math.floor(math.random());
  return apple.position.y = Math.floor(math.random());
}

function isAppleEaten(){
  let body = snake.body[0];
  let appleX = canvas.width/2;
  let appleY = canvas.height/2;
  if(body.x === appleX && body.y === appleY){
    console.log('Apple is eaten')
    // placeApple();
  }
}

function growSnake(){
  const newPiece = {x:0, y:0}
  const lastPiece = snake.body[snake.body.length-1]
  newPiece.x = lastPiece.x;
  newPiece.y = lastPiece.y;
  snake.body.push(newPiece)
  // snake.body.shift(newPiece)
  // snake.body.concat(newPiece)
  moveSnake();
}

// if snake coord coordinate === apple coordinate, append snake body to snake object
// function growSnake(snakeWidth){
//     snake.body.push([snake.body.x-snakeWidth, snake.body.y]);
//   };

function wallDetection(){
  if (snake.body[0].x > canvas.width){
   
    // snakeReset(); 
  } 
  if (snake.body[0].x < 0){
    // snakeReset(); 
    console.log('You clicked me')
  }
  if (snake.body[0].y > canvas.height){
    // snakeReset(); 
  } 
  if (snake.body[0].y < 0){
    // snakeReset();
  };
};

// 2. snake body if coord , same coordinate as any body part(s)
// 3. Snake object, body array
// 4. declone piece (i.e copy of snake body), then add to the body
//    append to the snake body either on front or back end of the snake
// 5. Grow Snake functionality.

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
  const speedX = 20;
  const speedY = 20
  switch (snake.direction) {
    case "up":
      snake.body[0].y -= speedY;
      break;
    case "down":
      snake.body[0].y += speedY;
      break;
    case "right":
      snake.body[0].x += speedY;
      break;    
    case "left":
      snake.body[0].x -= speedY;
      break;
  };
};

// function isAppleEaten(){
//   if(snake.body[0] === apple.coord[0]){
//     apple.coord[0] === math.floor(math.random);
//   };
// }

//-----------------------------------------
// All Drawing Below
function drawGameWindow(){  
  drawRect(0,0, canvas.width, canvas.height,'black');
};

function drawApple(){
  const appleWidth = 20;
  const appleHeight = 20;
  // apple.coord.forEach((piece) =>{
  //   drawRect(piece.x, piece.y, appleWidth, appleHeight, 'red')
  // })
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