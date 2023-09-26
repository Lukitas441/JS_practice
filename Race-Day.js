let raceNumber = Math.floor(Math.random()*1000)
let isRegisterEarlyer = false
let runnerAge = 18

if(runnerAge > 18 && isRegisterEarlyer){
    raceNumber+=1000
}

if(runnerAge > 18 && isRegisterEarlyer){
    console.log(`La hora de tu carrera es 9:30 y tu numero de corredor es ${raceNumber}`)
}else if(runnerAge > 18 && !(isRegisterEarlyer)){
    console.log(`La hora de salida es a las 11:00am ya que te registraste tarde, tu numero de corredor es ${raceNumber}`)
} else if(runnerAge === 18){
    console.log("Ve a hablar en recepcion")
}else{
    console.log(`Corredor joven! Tu hora de salida es a las 12:30pm. Tu numero de corredor es ${raceNumber}`)
}