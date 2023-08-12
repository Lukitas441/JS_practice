const checkAvailability = require('./library.js')

const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log('Every item was available from the distributor.\nPlacing order now.');
}
const onReject = (rejectReason) => {
    console.log(rejectReason);
}

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.')
const checkPants = checkAvailability('pants', 'Favorite Supply Co.')
const checkBags = checkAvailability('bags', 'Matel Co.')

Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject)