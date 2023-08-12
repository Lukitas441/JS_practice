let stock = {
    fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cup', 'cone', 'stick'],
    topping : ['chocolate', 'peanut']
}

const isShopOpen = true

const order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(isShopOpen) {
            setTimeout(() => {
                resolve(work())
            }, time);
        } else {
            reject(console.log('our shop is currently close'))
        }
    })
}

order(2000, () => console.log(`[The ${stock.fruits[0]} was selected]`))

.then(() => {
    return order(0,() => console.log('[Production has started]'))
})
.then(() => {
    return order(2000, () => console.log('[The fruit has been chopped]'))
})
.then(() => {
    return order(1000, () => console.log(`[${stock.liquid[0]} and ${stock.liquid[1]}  were added]`))
})
.then(() => {
    return order(1000, () => console.log('[The machine was initiated]'))
})
.then(() => {
    return order(2000, () => console.log(`[The icecream was place in a ${stock.holder[0]}]`))
})
.then(() => {
    return order(3000,() => console.log(`[${stock.topping[0]} was selected as a topping]`))
})
.then(() => {
    return order(2000, () => console.log('The icecream has been served'))
})

.catch(() => console.log('the customer left'))

.finally(() => console.log('[Day is over, the shop closed]'))