let canvas = document.getElementById('game-canvas');
let canvasContext = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

const GRID_SIZE = 20;

let playGame;
let score = 0; 
let isGameOver = false;

let snake = {
  head: [{x: 100, y: 100},{x: 80 , y:100}],
  direction: undefined
};

let apple = {
  x: "", 
  y: "",
};

window.onload = function (){  
  drawGameWindow();
  startGameText();
  placeAppleRandomly();
            
  document.addEventListener('keydown', (e) => {
    if (e.code === "Space" && isGameOver === false) startGame();
    if (e.code === "Enter" && isGameOver === true) resetGame();     
  });     
};

function startGame(){   
  playGame = setInterval(()=> gameInitializer(), 4000/GRID_SIZE)
};

function resetGame(){
  snake = {
    head: [{x: 100, y: 100},{x: 80 , y:100}],
    direction: undefined
  };
  placeAppleRandomly();
  startGame();
};

function gameInitializer(){ 
  drawGameWindow();
  drawApple();
  changeSnakeDirection();
  if (snake.direction) moveSnake();
  drawNewSnakePart();
  isAppleEaten();
  is_Snake_Hitting_Wall();
  is_Snake_Touching_Itself();
};
  
function placeAppleRandomly(){
    apple = { x: Math.floor(Math.random() * (canvas.width - GRID_SIZE)/GRID_SIZE) * GRID_SIZE , 
              y: Math.floor(Math.random() * (canvas.height - GRID_SIZE)/GRID_SIZE) * GRID_SIZE}
};

function isAppleEaten(){
  let head = snake.head[0];
  if (head.x === apple.x && head.y === apple.y){
    placeAppleRandomly()
    drawNewSnakePart();
    growSnake()
    scoreElement.textContent = score += 1;
  };
};

function growSnake(){
  const body = snake.head[0].x && snake.head[0].y 
  snake.head.push(body)
};

function changeSnakeDirection () {
  document.onkeydown = function(e){
    switch (e.code) {
      case "ArrowUp":
        if(snake.direction != "down") snake.direction = "up"
        break;
      case "ArrowDown":
        if(snake.direction != "up") snake.direction = "down"
        break;
      case "ArrowRight":
        if(snake.direction != "left") snake.direction = "right"
        break;      
      case "ArrowLeft":
        if(snake.direction != "right") snake.direction = "left"
        break;
      default:
        return;
    };
  };
};

function moveSnake(){
  for (let i = snake.head.length -1; i > 0; i--){
    snake.head[i] = Object.assign({}, snake.head[i-1])
  };

  switch (snake.direction) {
    case "up":
      snake.head[0].y -= GRID_SIZE;
      break;
    case "down":
      snake.head[0].y += GRID_SIZE;
      break;
    case "right":
      snake.head[0].x += GRID_SIZE;
      break;    
    case "left":
      snake.head[0].x -= GRID_SIZE;
      break;
    default:
      return;
  };
};

function is_Snake_Hitting_Wall(){
  if (snake.head[0].x < 0 || 
    snake.head[0].x === canvas.width ||
    snake.head[0].y < 0 ||
    snake.head[0].y === canvas.height){
      gameOver(); 
  };  
};

function is_Snake_Touching_Itself(){
  for (let i = 1; i < snake.head.length; i++ ){
    if (snake.head[0].x === snake.head[i].x && 
        snake.head[0].y === snake.head[i].y) {
      gameOver();
    }; 
  };
};

function gameOver(){
  clearInterval(playGame);
  gameOverText();
  restartGameText();
  isGameOver = true;
  scoreElement.textContent = 0;
};

function drawGameWindow(){  
  drawRect(0,0, canvas.width, canvas.height,'SaddleBrown');
};

function drawApple(){
    drawRect(apple.x, apple.y , GRID_SIZE, GRID_SIZE, 'DarkGreen') 
}

function drawNewSnakePart(){
   snake.head.forEach((part) => {
     drawRect(part.x, part.y, GRID_SIZE, GRID_SIZE, 'Black')
   });
};

function gameOverText(){
  canvasContext.font = ' bold 50px Red';
  canvasContext.fillStyle = 'Red';
  canvasContext.fillText('Game Over!', canvas.width/7, canvas.height/2)
};

function startGameText(){
  canvasContext.shadowBlur = '10';
  canvasContext.shadowColor = 'yellow'
  canvasContext.font = 'bold 25px black';
  canvasContext.fillStyle = 'black';
  
  canvasContext.fillText('Press Space To Start', canvas.width/5, 2*canvas.height/3)
};

function restartGameText(){
  canvasContext.font = 'bold 25px black';
  canvasContext.fillStyle = 'black';
  canvasContext.fillText('Press Enter To Restart', canvas.width/6, 2*canvas.height/3)
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