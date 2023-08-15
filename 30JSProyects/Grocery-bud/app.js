const alertAdvice= document.querySelector("#alert")
const grocery = document.querySelector('#grocery')
const submitBtn = document.querySelector('#submit-btn')
const groceryContainer = document.querySelector('#grocery-container')
const limpiarLista = document.querySelector('#clear-List')

submitBtn.addEventListener('click', () => {
    if (grocery.value === '') {
        alertAdvice.classList.remove('no-show')
        alertAdvice.innerHTML = 'Please write something first'
        setTimeout(() => { 
            alertAdvice.innerHTML = ''
            alertAdvice.classList.add('no-show')
    }, 4000)
    return
    }
    if(groceryContainer.innerHTML != null) {
        limpiarLista.classList.remove('no-show')
    }

    if(submitBtn.innerHTML === 'Enviar') {
        groceryContainer.innerHTML += 
    `<div id = "element-container">
        <p id = "element">${grocery.value}</p>
        <div id = "button-container">
            <button class = "btn" id = "edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class = "btn" id = "delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`
    
    } 

    grocery.value = ''
})

const modifyGrocery = (oldGrocery) => {
    grocery.value = oldGrocery.textContent
    submitBtn.innerHTML = 'Change'

}

groceryContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-pen-to-square')) {
        let element = e.target.parentElement.parentElement.previousElementSibling
        element = modifyGrocery(element)
    } else if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.parentElement.remove()
        if(groceryContainer.childElementCount === 0) {
            limpiarLista.classList.add('no-show')
        }
    }
})





limpiarLista.addEventListener('click', () => { 
        groceryContainer.innerHTML = null
})
