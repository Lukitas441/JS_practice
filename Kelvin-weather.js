const Kelvin = 293;//Seteo la temperatura en kelvin
const Celsius = Kelvin - 273;//Hay una diferencia de 273 entre grados celsius y grados kelvin
const Fahrenheit = Math.floor(Celsius*(9/5)+32);//Con esta ecuación se pueden pasar de grad0s celsius a fahrenheit
const Newton = Math.floor(Celsius*(33/100))

console.log("The temperature is "+Fahrenheit+" degrees Fahrenheit")
console.log(`Or ${Celsius} degrees Celsius`)
console.log(`And ${Newton} in newton`)