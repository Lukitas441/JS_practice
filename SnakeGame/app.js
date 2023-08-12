const qs = (selector, group) => {
  const elemnt = group
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);

  if (!elemnt) throw Error("unvalid element");

  return elemnt;
};

const playBoard = qs(".play-board");
const scoreElement = qs(".score");
const highScoreElement = qs(".high-score");
const controls = qs(".controls i", true);

let gameOver = false;
let foodX, foodY;
let snakeX = 5,
  snakeY = 5;
let velocityX = 0,
  velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

//conseguir mayor puntaje desde local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

//numero random entre 1 y 30 para la posicion de las frutas
const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert("Game Over! Press OK to replay...");
  location.reload();
};

//cambiar la velocidad/direccion usando las flechas
const changeDirection = (e) => {
  if (e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowLeft" && velocityX != 1) {
    velocityY = 0;
    velocityX = -1;
  } else if (e.key === "ArrowRight" && velocityX != -1) {
    velocityY = 0;
    velocityX = 1;
  } else if (e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  }
};

//Cambios de direccion x click
controls.forEach((btn) => {
  btn.addEventListener("click", (e) =>
    changeDirection({ key: btn.dataset.key })
  );
});



const initGame = () => {
  if (gameOver) return handleGameOver();
  let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  //si la vibora come una fruta
  if (snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();
    snakeBody.push([foodY, foodX]); //se agrega la fruta al cuerpo de la vibora
    score++;
    highScore = score >= highScore ? score : highScore;

    localStorage.setItem("high-score", highScore);
    scoreElement.innerText = `Score: ${score}`;
    highScoreElement.innerText = `High Score: ${highScore}`;
  }

  //actualizar la cabeza de la vibora
  snakeX += velocityX;
  snakeY += velocityY;

  //avance del cuerpo de la vibora
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  snakeBody[0] = [snakeX, snakeY];

  //chequear si el cuerpo de la vibora esta fuera de los muros
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    return (gameOver = true);
  }
  //agregar el cuerpo de la vibora
  for (let i = 0; i < snakeBody.length; i++) {
    html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

    //chequea si la cabeza toco su cuerpo
    if (
      i !== 0 &&
      snakeBody[0][1] === snakeBody[i][1] &&
      snakeBody[0][0] === snakeBody[i][0]
    ) {
      gameOver = true;
    }
  }

  playBoard.innerHTML = html;
};

updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keydown", changeDirection);
