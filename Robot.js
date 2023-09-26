const robot = {
    battery: 'Quantum Battery',
    core: 'Awakening III',
    model: '1E78V2',
    energyLevel: 100,
    active: true,
    provideInfo() {
      console.log(`I am ${this.model} and my current energy level is ${this.energyLevel}`)
    },
    giveMoreInfo()  {
      console.log(`Battery: ${this.battery}\nCore: ${this.core}`)
      if(this.active === true) {
        console.log('Status: Active') 
      } else {
        console.log('Status: Disable')
      }
    }
  };
  robot.giveMoreInfo()