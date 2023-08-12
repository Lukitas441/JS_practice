
const randomColor = () => {
    const maxNumber = 0xFFFFFF
    let randomNumber = Math.floor(Math.random()*maxNumber)
    randomNumber = randomNumber.toString(16)
    return randomNumber.padStart(6, 0)
}

const btn = document.getElementById('aliceButton')
const color = document.querySelector('.color')

const nombreVentana = window.location.pathname.split('/').pop()

console.log(nombreVentana);

if(nombreVentana === 'index.html') {
    btn.addEventListener('click', () => {
    const newColor = `#${randomColor()}`
    
    document.body.style.backgroundColor = newColor
    
    const backgroundText = document.getElementById('text-Color')
    backgroundText.innerHTML = `background-color: ${newColor};`
})
} else {
    btn.addEventListener('click', () => {
    const newColor = `#${randomColor()}`
    
    document.body.style.backgroundColor = newColor
    
    const backgroundText = document.getElementById('text-Color')
    backgroundText.innerHTML = `background-color: ${document.body.style.backgroundColor};`
})
}

