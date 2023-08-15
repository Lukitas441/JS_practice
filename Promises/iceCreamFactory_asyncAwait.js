let stock = {
    fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cup', 'cone', 'stick'],
    topping : ['chocolate', 'peanut']
}

const isShopOpen = true

const time = (ms) => {
    return new Promise((resolve, reject) => {
        if(isShopOpen) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log('Shop is closed'))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`[${stock.fruits[Math.floor(Math.random()*4)]} was selected]`);

        await time(0)
        console.log('[Production has started]')

        await time(2000)
        console.log('[The fruit has been chopped]')

        await time(1000)
        console.log(`[${stock.liquid[0]} and ${stock.liquid[1]}  were added]`)

        await time(1000)
        console.log('[The machine was initiated]')

        await time(2000)
        console.log(`[The icecream was place in a ${stock.holder[Math.floor(Math.random()*3)]}]`)

        await time(3000)
        console.log(`[${stock.topping[Math.floor(Math.random()*2)]} was selected as a topping]`)

        await time(2000)
        console.log('The icecream has been served')
    } catch(error) {
        console.log('customer left', error);
    } finally{
        await time(2000)
        console.log('Day is over, shop is now closed');
    }
}

kitchen()