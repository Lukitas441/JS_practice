const qs = (id) => {
    const elmnt = document.querySelector(id)
    if(!elmnt) throw Error("couldn\'t find element "+id)
    return elmnt
}
const qsAll = (id) => {
    const elmnt = document.querySelectorAll(id)
    if(!elmnt) throw Error("couldn\'t find group of elements "+id)
    return elmnt
}

const canvas = document.querySelector('#game-canvas')
const ctx = canvas.getContext('2d')
const endMenu = document.querySelector('#end-menu') 
const resetBtn = document.querySelector('reset-button')

//se usara para desenfocar cuando aparezca el modal
const gameContainer= document.querySelector('#game-container')

const flappyImg = new Image() 
flappyImg.src = 'assets/flappy_dunk.png'

//constantes del juego
const FLAP_SPEED = -5
const BIRD_WIDTH = 40
const BIRD_HEIGHT = 30
const PIPE_WIDTH = 50
const PIPE_GAP = 125

//variables del pájaro
let birdX = 50
let birdY = 50
let birdVelocity = 0
let birdAcceleration = .35

//variables de los tubos
let pipeX = 400
let pipeY = canvas.height - 200

//variables score y highscore
let scoreDiv = document.querySelector('#score-display')
let score = 0
let highScore = 0

document.body.onkeyup = function(e) {
    if(e.code == 'Space') {
        birdVelocity = FLAP_SPEED
    } 
}

function increaseScore() {
    //TODO
}

function collisionCheck() {
    const birdBox = {
        x: birdX ,
        y: birdY,
        width: BIRD_WIDTH,
        height: BIRD_HEIGHT
    }
    const topPipeBox = {
        x: pipeX,
        y: pipeY - PIPE_GAP + BIRD_HEIGHT,
        width: PIPE_WIDTH,
        height: pipeY
    }
    const bottomPipeBox = {
        x: pipeX,
        y: pipeY + PIPE_GAP + BIRD_HEIGHT,
        width: PIPE_WIDTH,
        height: canvas.height - pipeY - PIPE_GAP
    }

    //corroborar colisiones / parte superior
    if(birdBox.x + birdBox.width > topPipeBox.x &&
        birdBox.x < topPipeBox.x + topPipeBox.width &&
        birdBox.y <topPipeBox.y) return true
    
    // /parte inferior
    if(birdBox.x + birdBox.width > bottomPipeBox.x &&
        birdBox.x < bottomPipeBox.x + bottomPipeBox.width &&
        birdBox.y + birdBox.height > bottomPipeBox.y) return true
    
    // /bordes
    if(birdY < 0 ||
        birdY + BIRD_HEIGHT > canvas.height) return true
}
function updateScore() {
    qs('#end-score').innerText = score
    qs('#best-score').innerText = 55
}

function toggleEndMenu() {
    updateScore()
    endMenu.classList.toggle('hidden')
    gameContainer.classList.toggle('backdrop-blur')
}

function resetGame() {
    //TODO
}

function endGame() {
    alert('game over')
}

function loop() {
    //reinicia el ctx cada que se repite el loop
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //mostrar a Flappy
    ctx.drawImage(flappyImg, birdX, birdY)

    //mostrar tuberias
    ctx.fillStyle = '#333'
    ctx.fillRect(pipeX, -100, PIPE_WIDTH, pipeY)
    ctx.fillRect(pipeX, pipeY + PIPE_GAP, PIPE_WIDTH, canvas.height - pipeY)

    pipeX -= 4
    //si la tuberia sale de la pantalla, debe resetearse
    if(pipeX < -50) {
        pipeX = 400 
        pipeY = Math.random() * (canvas.height - PIPE_GAP) + PIPE_WIDTH
    }
    //collision check
    if(collisionCheck()) {
        endGame()
        return
    }
    //gravedad   
    birdVelocity += birdAcceleration
    birdY += birdVelocity

    requestAnimationFrame(loop)
}

loop()