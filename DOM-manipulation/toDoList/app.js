const addTask = document.querySelector('#add-task')
const inputTask = document.querySelector('#input-task')
const taskContainer = document.querySelector('#task-container')

addTask.addEventListener('click', () => {
    if(inputTask.value === '') {
        alert('Please write a task')
        return
    }
    taskContainer.innerHTML += 
    `<div class = "task">
        <li>${inputTask.value}</li>
        <button class = "checkTask"><i class = "fa-solid fa-check"></i></button>
        <button class = "deleteTask"><i class = "fa-solid fa-trash-can"></i></button>
    </div>`

    inputTask.value = null
})
inputTask.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        addTask.click()
    }
})


taskContainer.addEventListener('click', (e) => {
    console.log(e.target.classList);
    const element = e.target.parentElement
    if (e.target.classList.contains('checkTask') || e.target.classList.contains('fa-check') ) {
        if(!e.target.classList.contains('fa-check')) {
            if (element.style.color === 'orange') {
                element.style.textDecoration = 'none'
                element.style.color = 'black' 
                return   
            }

            element.style.textDecoration = 'line-through'
            element.style.color = 'orange'
            return
        }
        if (element.parentElement.style.color === 'orange') {
            element.parentElement.style.textDecoration = 'none'
            element.parentElement.style.color = 'black'    
            return
        }   

        element.parentElement.style.textDecoration = 'line-through'
        element.parentElement.style.color = 'orange' 
    }
    if (e.target.classList.contains('deleteTask') || e.target.classList.contains('fa-trash-can')) {
        
        if(e.target.classList.contains('fa-trash-can')){
            element.parentElement.remove()
        }

        element.remove()
    }
})


