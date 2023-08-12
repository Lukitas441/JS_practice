const robotMaker = (model, core, memoryCapacity, upgradable) => {
    return {
        model,
        core,
        memoryCapacity,
        upgradable
    }
}

const MetalGearSolid = robotMaker('P-500', 'Athem III', 100, true)

/*console.log('is Metal upgradable? '+MetalGearSolid.upgradable)
console.log(MetalGearSolid.model)

const { core } = MetalGearSolid
console.log('Metal\'s core: '+core)*/

const robotKeys = Object.keys(MetalGearSolid)
const robotEntries = Object.entries(MetalGearSolid)
const metalII = Object.assign(MetalGearSolid, {conexion: true, dataStatus: 'Overwritten', origin: 'unknown'})

//console.log(robotKeys)
//console.log(robotEntries)
console.log(metalII)