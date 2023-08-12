const prompt = require('prompt-sync')({sigint: true})

let number

    do {
    number = prompt('Write a number: ')
    if(number != 0) {
        console.log(number)
        do {
            if(number % 2 === 0){
                number = number/2
            } else {
               number = 3*number+1
            }
            console.log(number);
            }while(number != 1)
            console.log('__________________');
    }
} while (number != 0);
console.log('Fin de programa');

