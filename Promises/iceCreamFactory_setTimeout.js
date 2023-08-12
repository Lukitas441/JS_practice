const prompt = require ('prompt-sync')({sigint : true}) 
let stock = {
    fruits : ['strawberry', 'grapes', 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cup', 'cone', 'stick'],
    topping : ['chocolate', 'peanut']
}

const order = (fruitName, callProduction) => {
    setTimeout(() => {
        console.log(`${stock.fruits[fruitName]} was selected`)
        callProduction()
    }, 2000)
    
}
//CALLBACK HELL
const production = () => {
    console.log('[production has started]');
   
    setTimeout(() => {
        console.log('[the fruit has been chopped]');

        setTimeout(() => {
            console.log(`[${stock.liquid[0]} and ${stock.liquid[1]} were added]`);

            setTimeout(() => {
                console.log('[the machine was started]');

                setTimeout(()=>{
                    console.log(`[ice cream was placed on a ${stock.holder[Math.floor(Math.random()*3)]}]`);

                    setTimeout(() => {
                        console.log('['+stock.topping[Math.floor(Math.random()*2)]+' was added as a topping]');

                        setTimeout(() => {
                            console.log('ice cream is served');
                        }, 2000);
                    }, 3000);
                }, 1000)
            },1000)
        }, 1000);
    }, 2000);
}

order(Math.floor(Math.random()*4), production)