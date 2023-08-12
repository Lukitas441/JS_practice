const promt = require ('prompt-sync')({sigint : true})

const userName = promt('Escribe tu nombre: ')
userName.length > 0 ? console.log(`Hola, ${userName}!`) : console.log('Hola!')

const userQuestion = promt('Escribe tu pregunta: ')
console.log(`La pregunta que hiciste fue "${userQuestion}"`)

const eightBall = () => {
    const randomNumber = Math.floor(Math.random()*8)
    let eightBall

    switch (randomNumber) {
        case 0:
            eightBall='Definitivamente sí'
            break;
        case 1:
            eightBall='Es cierto'
            break;
        case 2:
            eightBall='No cuentes con ello'
            break;
        case 3:
            eightBall='Es muy dudoso'
            break;
        case 4:
            eightBall='Pregúntame de nuevo después'
            break;
        case 5:
            eightBall='Concéntrate y vuelve a preguntar'
            break;
        case 6:
            eightBall='No puedo predecirlo en este momento'
            break;
        case 7:
            eightBall='Mejor no te lo digo ahora'
            break;
    
        default:
            break;
    }

    console.log(eightBall)
}

setTimeout(eightBall, 2000)

