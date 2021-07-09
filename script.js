var canvas;
var canvasContext;
var appleX = 100;

let snake = {
  body: [{x: 50, y: 50}],
  direction: undefined,
}

window.onload = function (){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  drawGameWindow();

  var framesPerSecond = 30;
  setInterval(function(){
    
  }, 1000/framesPerSecond);
  drawSnake();
  drawApple(appleX,canvas.height/3, 10, 'red');
  changeSnakeDirection();
    // gameOver();
  
    
}

function drawSnake(){
  snake.body.forEach((part) => {
    colorRect(part.x, part.y, 20, 20, 'green')
    //console.log(part.y)
  });
};

function changeSnakeDirection () {
  document.onkeydown = function(e){
    
    if(e.key === 'ArrowUp'){
      console.log('Arrow up is clicked!')
      turnSnakeUp();

      // if snake is not moving up or down && if snake is moveing right or left
      // then move up
      // arrowUp();
      
      // snake.body.y -= 20
    }
    if(e.key === 'ArrowDown'){
      console.log('Arrow down is clicked!')
      
    }
    if(e.key === 'ArrowRight'){
      console.log('Arrow right is clicked!')
      // moveSnake();
      
    }
    if(e.key === 'ArrowLeft'){
      console.log('Arrow left is clicked!')
    }
  };
};

//goal: change x and y coordinate of snake
//in order to do that we need to:
//  1) add x coordinate to move right
//  2) add -x to move left
//  3) add y to move down
//  4) add -y to move up
 

// function moveSnake(){
//   if (body.y === '-'){
//     if (snake.body.y ===0){
//       snake.x = 0;
//       snake.y -= 20;
//       console.log(snake.y)
//     };
//   };
// };
//console.log(snake.body[0].x)


function turnSnakeUp(direction){

  if(snake.direction === '+x' || snake.direction === '-x') {
    snake.body.x = 0;
    snake.body.y -= 20;
  };
};


function gameOver(){
  snakeX += 5;
  snakeY += 5;

  if (snakeX >= canvas.width){
    // alert('Game is over!')
    snakeReset();
    canvasText((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
    
  } 
  if (snakeX < 0){
    // alert('Game is over!')
    snakeReset();
    canvasText((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  }
  if (snakeY > canvas.height){
    // alert('Game is over!')
    snakeReset();
    canvasText((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  } 
  if (snakeY < 0){
    // alert('Game is over!')
    snakeReset();
    canvasText((canvas.width/2)-78, (canvas.height/2)-60,'Game Over!', 'orange');
  };
};




// all drawing below
function drawGameWindow(){  
  colorRect(0,0, canvas.width, canvas.height,'black');
  //colorRect(snakeX, canvas.height/2, 20, 20,'green');
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

//-----------------------------------------------------------------------------


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

// function snakeReset (){
//   const ballx = snakeX;
// }