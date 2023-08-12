const checkAvailability = (nombreItem, nombreDistribuidor) => {
    console.log(`Checking availabity of ${nombreItem} at ${nombreDistribuidor}...` )
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${nombreItem} are in stock at ${nombreDistribuidor}`);
                resolve(nombreItem)
            } else {
                reject(`Error: ${nombreItem} are unavailable from ${nombreDistribuidor} at this moment`)
            }
        }, 1000);
    })
}

module.exports = checkAvailability

//devuelve verdadero el 80% de las veces
const restockSuccess = () => {
    return Math.random() > .2
}
