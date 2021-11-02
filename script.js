var canvas;
var canvasContext;

let snake = {
  headPosition: [{x: 100, y: 100}],
  // size: [{width:20, height:20}],
  direction: undefined,
}

const apple = {
  body: [{x: 400, y: 200}],
  // color: red
}
//, {x: 50, y: 70}, {x: 50, y: 90}

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
    // const appleRa
    drawApple(canvas.width/2,canvas.height/2, 10, 'red');
    drawSnake();
    changeSnakeDirection();
    moveSnake();
    

    if (wallDetection()){
      alert('game is alert');
      // console.log('You clicked me')
      gameOverText();
    };
  
}

// if snake head coordinate === apple coordinate, append snake body to snake object
function growSnake(){
  if (snake.headPosition[0].x === apple.body[0].x ){
    snake.headPosition.push([snake.headPosition.x-snakeWidth, snake.headPosition.y]) = drawSnake();
  }
}

function wallDetection(snakeWidth, snakeHeight){
  if (snake.headPosition[0].x > canvas.width){
    // snakeReset(); 
  } 
  if (snake.headPosition[0].x < 0){
    // snakeReset(); 
  }
  if (snake.headPosition[0].y > canvas.height){
    // snakeReset(); 
  } 
  if (snake.headPosition[0].y < 0){
    // snakeReset();
  };
};

// 2. snake body if head , same coordinate as any body part(s)
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

// const textWidth = text.width
  // wallDetection(textWidth)

//-----------------------------------------
// All Drawing Below
function drawGameWindow(){  
  drawRect(0,0, canvas.width, canvas.height,'black');
};

function drawApple (){
  const appleWidth = 20;
  const appleHeight = 20;
  // snake.size.width;
  // snake.size.height;
  snake.body.forEach((part) => {
    drawRect(part.x, part.y, snakeWidth, snakeHeight, 'green')
  });


}
  

function drawApple (centerX, centerY, radius, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
  // "0" and "Math.PI*2" are the angles in radians around the circle is being drawn.
  // "true" to draw circle clock or clock-wise circle?
  canvasContext.fill()
};

function drawSnake(){
  const snakeWidth = 20;
  const snakeHeight = 20;
  // snake.size.width;
  // snake.size.height;
  snake.body.forEach((part) => {
    drawRect(part.x, part.y, snakeWidth, snakeHeight, 'green')
  });
  // wallDetection(snakeWidth,snakeHeight)
};

function gameOverText(text, startCoordinate, endCoordinate){
  canvasContext.font = '100px orange';
  canvasContext.fillStyle = 'orange';
  canvasContext.fillText(text, startCoordinate, endCoordinate)
};

function drawRect(leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect (leftX, topY, width, height);
};
