const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')
let displayTimer = document.querySelector('#timer')


//variables para marcar el tiempo
let seconds = 00, minutes = 00, hours = 00

//variables para corregir el doble 0
let leadingSeconds, leadingMinutes, leadingHours

//variables para definir el intervalo y el estado del timer
let timerInterval = null
let timerStatus = 'stopped'

const stopWatch = () => {
    seconds++
    if (seconds / 60 === 1) {
        seconds = 0
        minutes++
        if (minutes / 60 === 1) {
            minutes = 0
            hours++
        } 
    }
    
    leadingSeconds = seconds.toString().padStart(2, 0)
    leadingMinutes = minutes.toString().padStart(2, 0)
    leadingHours = hours.toString().padStart(2, 0)

    displayTimer.innerText = leadingHours +':'+ leadingMinutes +':'+ leadingSeconds
}

startStopBtn.addEventListener('click', () => {
    if(timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000)
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-pause" id="pause"></i>`
        timerStatus = 'started'
    } else {
        window.clearInterval(timerInterval)
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play" id="play"></i>`
        timerStatus = 'stopped'
    }
})

resetBtn.addEventListener('click', () => {
        window.clearInterval(timerInterval)
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play" id="play"></i>`
        timerStatus = 'stopped'

        seconds = 0
        minutes = 0
        hours = 0
        displayTimer.innerText = '00:00:00'

})


