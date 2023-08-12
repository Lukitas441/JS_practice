let count = 0
const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
       const pulsedButton = e.currentTarget.id
       if(pulsedButton === 'increase') {
            count++
       } else if(pulsedButton === 'decrease') {
        count--
       } else {
        count = 0
       }
       count > 0 ? counter.style.color = 'green': count < 0 ? counter.style.color = 'red' : counter.style.color = 'rgb(39, 41, 39)'
       counter.textContent = count
    })
})
