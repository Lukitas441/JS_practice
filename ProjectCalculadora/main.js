
const keys = document.querySelectorAll('.key')
const displayInput = document.querySelector('.display .input')
const displayOutput = document.querySelector('.display .output')

let input = ''

keys.forEach(key => {
    const value = key.dataset.key
    
    key.addEventListener('click', () => {
        switch (value) {
            case 'clear':
                input = ''
                displayInput.innerHTML = ''
                displayOutput.innerHTML = ''
            break;
            case 'backspace':
                input = input.slice(0, -1)
                displayInput.innerHTML = cleanInput(input)
            break;
            case '=':
                if(input != ''){
                    let result = math.evaluate(input)
                    displayOutput.innerHTML = cleanOutput(result)
                }
            break;
            case 'brackets':
                if(
                    input.indexOf('(') == -1 || 
                    input.indexOf('(') != -1 && 
                    input.indexOf(')') != -1 && 
                    input.lastIndexOf('(') < input.lastIndexOf(')')
                    ) { input += '(' } 
                else if(
                    input.indexOf('(') != -1 && 
                    input.indexOf(')') == -1 || 
                    input.indexOf('(') != -1 && 
                    input.indexOf(')') != -1 && 
                    input.lastIndexOf('(') > input.lastIndexOf(')')
                    ) { input += ')' }

                displayInput.innerHTML = cleanInput(input)
            break; 
            case '.':
                if(checkDot(input)) {
                    input += '.'
                    displayInput.innerHTML = cleanInput(input)
                }
            break;
            default:
                input += value
                displayInput.innerHTML = cleanInput(input)

                break;
        }
    })
});

const checkDot = (input) => {
    let check = false
    if(input.indexOf('.') == -1 || input.lastIndexOf('.') < input.lastIndexOf('+') || input.lastIndexOf('.') < input.lastIndexOf('-') || input.lastIndexOf('.') < input.lastIndexOf('*') || input.lastIndexOf('.') < input.lastIndexOf('/')) {
        check = true
    }
    return check
}

const cleanInput = (input) => {
    let inputArray = input.split('')
    let inputArrayLength = inputArray.length

    for(let i = 0; i<inputArrayLength; i++) {
        switch (inputArray[i]) {
            case '*':
                inputArray[i] = '<span class = "operator">x</span>'
                break;

            case '/':
                inputArray[i] = '<span class = "operator">/</span>'
                break;

            case '+':
                inputArray[i] = '<span class = "operator">+</span>'
                break;

            case '-':
                inputArray[i] = '<span class = "operator">-</span>'
                break;

            case '(':
                inputArray[i] = '<span class = "brackets">(</span>'
                break;
            case ')':
                inputArray[i] = '<span class = "brackets">)</span>'
                break;  
                
            case '-':
                inputArray[i] = '<span class = "operator">-</span>'
                break;     
                
            case '%':
                inputArray[i] = '<span class = "operator">%</span>'
                break;  
        }
    }
    return inputArray.join('')
}

const cleanOutput = (output) => {
    let outputString = output.toString()
    let decimals = false
    if (outputString.indexOf('.') != -1) {
      decimals = outputString.split('.')[1].slice(0, 4) 
    }
    outputString = outputString.split('.')[0]

    let outputArray = outputString.split('')
    if(outputArray.length > 3) {
        for (let i = outputArray.length; i > 0; i -= 3) {
            outputArray.splice(i, 0, ',')
        }
    }
    if (decimals) {
        outputArray.push('.')
        outputArray.push(decimals)
    }

    if(outputArray[(outputArray.length)-1] === ',') {
        outputArray.pop()
    }
    if(outputArray.lastIndexOf(',') === (outputArray.indexOf('.'))-1){
        outputArray[outputArray.lastIndexOf(',')] = ''
    }

    return outputArray.join('')
}
