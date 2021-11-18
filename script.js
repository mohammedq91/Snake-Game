let canvas = document.getElementById('gameCanvas');
let canvasContext = canvas.getContext('2d');
const gridSize = 20;
let timer;
let playGame;
let endGame;
let score = 0;
const scoreElement = document.getElementById('score');
let startGame = true;

let snake = {
  head: [{x: 100, y: 100},{x: 80 , y:100}],
  direction: undefined
};

let apple = {
  x: Math.floor(Math.random() * (canvas.width - gridSize)/20) * 20 , 
  y: Math.floor(Math.random() * (canvas.height - gridSize)/20) * 20
};

let arrow;
window.onload = function (){  
  drawGameWindow();
  arrow = pressArrowText();          

  document.addEventListener('keydown', (e) => {
    if (e.code === "Space"){     
      arrow = false;  // arrow = '';       
      let framesPerSecond = 20;   
      playGame = setInterval(function(){       
        gameInitializer()                   
      }, 4000/framesPerSecond);
    };     
  });
};

// create event listener for spacebar
  // when specarebar is pressed
  // fire off this setInterval:

function gameInitializer(){ 
  drawGameWindow();
  drawApple();
  changeSnakeDirection();
  
  if (snake.direction != undefined){
   moveSnake();
  }

  drawNewSnakePart();
  isAppleEaten();
  is_Snake_Hitting_Wall();
  is_Snake_Touching_Itself();
};
  
function drawAppleRandomly(){
    apple = { x: Math.floor(Math.random() * (canvas.width - gridSize)/20) * 20 , 
              y: Math.floor(Math.random() * (canvas.height - gridSize)/20) * 20}
};

function isAppleEaten(){
  let head = snake.head[0];
  if (head.x === apple.x && head.y === apple.y){
    drawAppleRandomly()
    drawNewSnakePart();
    growSnake()
    scoreElement.textContent = score += 1;
  };
};

function growSnake(){
  const body = snake.head[0].x & snake.head[0].y // const body = {x: snake.head.x , y: snake.head.y} 
  snake.head.push(body)
};

function changeSnakeDirection () {
  document.onkeydown = function(e){
    var keyboard = e.key;
    if(keyboard === 'ArrowUp' && snake.direction != "down") snake.direction = "up";
    if(keyboard === 'ArrowDown' && snake.direction != "up") snake.direction = "down"; 
    if(keyboard === 'ArrowRight' && snake.direction != "left") snake.direction = "right";
    if(keyboard === 'ArrowLeft' && snake.direction != "right") snake.direction = "left";
  };
};

function moveSnake(){
  for (let i = snake.head.length -1; i > 0; i--){
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
  if (snake.head[0].x < 0 || 
    snake.head[0].x === canvas.width ||
    snake.head[0].y < 0 ||
    snake.head[0].y === canvas.height){
      gameOver();
      gameOverText();
    };
};

function is_Snake_Touching_Itself(){
  for (let i = 1; i < snake.head.length; i++ ){
    if (snake.head[0].x === snake.head[i].x && 
        snake.head[0].y === snake.head[i].y) {
      gameOver();
      gameOverText();
    }; 
  };
};

function gameOver(){
  clearInterval(playGame);
  console.log("Game is Over!")
};
  
//-----------------All Drawing Objects Below ------------------------------------
function drawGameWindow(){  
  drawRect(0,0, canvas.width, canvas.height,'SaddleBrown');
};

function drawApple(){
    drawRect(apple.x, apple.y , gridSize, gridSize, 'DarkGreen') 
}

function drawNewSnakePart(){
   snake.head.forEach((part) => {
     drawRect(part.x, part.y, gridSize, gridSize, 'Black')
   });
};

function gameOverText(){
  canvasContext.font = ' bold 30px Red';
  canvasContext.fillStyle = 'Red';
  canvasContext.fillText('Game Over!', 115, canvas.height/2)
};

function pressArrowText(){
  canvasContext.shadowBlur = '10';
  canvasContext.shadowColor = 'yellow'
  canvasContext.font = 'bold 20px black';
  canvasContext.fillStyle = 'black';
  
  canvasContext.fillText('Press Spacebar To Play The Game!', canvas.width/8, 2*canvas.height/3)
  console.log("Draw Arrow")
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

// function drawCircle (centerX, centerY, radius, drawColor){
//   canvasContext.fillStyle = drawColor;
//   canvasContext.beginPath();
//   canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true)
//   // "0" and "Math.PI*2" are the angles in radians around the circle is being drawn.
//   // "true" to draw circle clock or clock-wise circle?
//   canvasContext.fill()
//  }; 

// const textWidth = textHeight = 300;
// drawText('30px Arial', 'orange','Game Over!', textWidth, textHeight)

// --------------Keyboard Event Listener Types------------
// document.onkeydown = function(e){
//   if (e.key === ' '){
//     console.log('spacebar')
//   };
// };

// document.addEventListener('keydown', (e) =>{
//   if (e.key === " "){
//     console.log('bar');
//   };
// });