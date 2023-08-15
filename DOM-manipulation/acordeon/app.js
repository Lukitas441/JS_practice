const accordion = document.querySelectorAll('.content-container')

accordion.forEach(element => {
    element.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active')
    })
});
