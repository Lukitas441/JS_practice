class Libro {
    constructor(nombreLibro, autor, ISBN, editorial){
        this._bookName = nombreLibro,
        this._author = autor,
        this._ISBN = ISBN,
        this._editorial = editorial
    }
    get bookName() {
        return this._bookName
    }
    get author() {
        return this._author
    }
    get ISBN() {
        return this._ISBN
    }
    get editorial() {
        return this._editorial
    }
}

module.exports = Libro
/*const Pepe = new Libro('Pepe', 'Juan Torres Garcia', 161842, 'Ocean')
console.log(Pepe.ISBN);*/
