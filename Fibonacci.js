const prompt = require('prompt-sync')({sigint: true})

const numberOfRows = prompt('Escriba la cantidad de veces que quiere repetir la secuencia: ')
const result = [0, 1]

for(let i = 0; i <= numberOfRows; i++) {
    result.push(result[i+1]+result[i])
}
console.log(result);