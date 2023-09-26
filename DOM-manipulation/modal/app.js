let openBtn = document.querySelector('#open-btn')
let container = document.querySelector('#modal-container')
let closeBtn = document.querySelector('#close-btn')

openBtn.addEventListener('click', () => {
    container.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    container.style.display = 'none'
})
window.addEventListener('click', (e) => {
    if(e.target === container) {
        container.style.display = 'none'
    }
})