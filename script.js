var canvas;
var canvasContext;

let snake = {
  head: [{x: 100, y: 100}],
  // body: [{x: snake.head.x , y: snake.head.y}],
  // size: [{width:20, height:20}],
  direction: undefined,
  // length: 2
}
// let body = {x: snake.head.x , y: snake.head.y} 

const apple = {
  coord: [{x:200 , y:200}],
  // coordinates: [{x: apple.coord.Math.floor(Math.random()) , y: apple.coord.Math.floor(Math.random())  }]
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
    // placeApple();
    changeSnakeDirection();
    moveSnake();
    drawSnake();
    isAppleEaten();
    
    if (wallDetection()) gameOver();
}

function playGame(){
  
}

function placeApple(){
  // const foodX = Math.floor(Math.random)
  // const foodY = Math.floor(Math.random)
  // console.log("Random food placement is:", foodX, foodY)

  // const position = apple.coord
  // return position[Math.floor(Math.random() * position[0])]
  // console.log("randomize apple coord:", position)
    
    // appleCoordValues = Object.values(apple.coord[0])
    // console.log ("Apple random coord is :", appleCoordValues)
    // return appleCoordValues [Math.floor(Math.random() * appleCoordValues.lenth)]
  // var appleCoord = Math.floor(Math.random()*canvas.length)
  // console.log("random is: ", appleCoord)
  // var x = 2

  // const coordinates = apple.coord[0]
  // const coordValues = Object.values(apple.coord[0])
  // let randomCoord = Math.floor(Math.random()* coordinates.length)
  // console.log("randomCoord is: ", randomCoord)

  for (const [key,value] of Object.entries(apple)){
    var appleCoord = Math.floor(Math.random()*apple.coord)
    console.log("appleCoord is :", appleCoord)
  }

  // const choices = ["rock", "paper", "scissors"];
  // console.log(Math.random() *choices.length)
  // console.log(Math.random())
  // return choices[Math.floor(Math.random() * choices.length)];
}

function isAppleEaten(){
  let head = snake.head[0];
  let appleX = canvas.width/2;
  let appleY = canvas.height/2;
  if(head.x === appleX && head.y === appleY){
    growSnake();
    console.log("Apple is eaten")
    console.log(snake.head.length)
    placeApple()
  };
}

function growSnake(){
  const body = {x: snake.head.x , y: snake.head.y} 
  //const body = snake.head[0]   
  snake.head.push(body)
}

function gameOver(positionX, positionY){
  const textWidth = 330;
  const textHeight = 300;
  positionX, positionY = clearInterval();
  drawText('30px Arial', 'orange','Game Over!', textWidth, textHeight)
  
}

function wallDetection(){
  if (snake.head[0].x > canvas.width){ 
    gameOver();
  } 
  if (snake.head[0].x < 0){
    gameOver(); 
  }
  if (snake.head[0].y > canvas.height){
    gameOver(); 
  } 
  if (snake.head[0].y < 0){
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
  for (let i = snake.head.length -1; i > 0; --i){
    snake.head[i] = Object.assign({}, snake.head[i-1])
  };

  // const speedX = 2;
  // const speedY = 2;
  switch (snake.direction) {
    case "up":
      var positionY = snake.head[0].y -= 20 //+ speedY;
        /*console.log(positionY)*/;
      break;
    case "down":
      var positionY = snake.head[0].y += 20 //+ speedY;
        /*console.log(positionY)*/;
      break;
    case "right":
      var positionX = snake.head[0].x += 20 //+ speedX;
        /*console.log(positionX)*/;
      break;    
    case "left":
      var positionX = snake.head[0].x -= 20 //+ speedX;
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
  snake.head.forEach((part) => {
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