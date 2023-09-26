class HospitalEmployee {
    constructor(name) {
        this._name = name
        this._remainingVacationDays = 20
    }
    get name() {
        return this._name
    }
    get remainingVacationDays() {
        return this._remainingVacationDays
    }
    removeVacationDays(days) {
        this._remainingVacationDays -= days
    }
    static generatePassword() {
        return Math.floor(Math.random()*10000)
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name)
        this._certifications = certifications
    }
    addNewCertification(NewCertifications) {
        this._certifications.push(NewCertifications)
    }
}

class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
        super(name)
        this._insurance = insurance
    }
    get insurance() {
        return this._insurance
    }
}

const nurseAna = new Nurse('Ana Clara', ['Pediatra', 'Medica General'])
//console.log(nurseAna.name)

const DtPereita = new Doctor('Juan Pereira', ['Genetista', 'Oftalmologo', 'Oculista'])
console.log(DtPereita.name)


/*const password = HospitalEmployee.generatePassword
console.log(password)*/
