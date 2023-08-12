const Libro =  require('./Libro.js')

class Estante {
    constructor(nombreDeEstante) {
        this._shelfName = nombreDeEstante
        this._capacity = 50
        this._bookList = []
    }
    get shelfName() {
        return this._shelfName
    }
    get capacity() {
        return this._capacity
    }
    get bookList() {
        for(let i = 0; i<this._bookList.length; i++) {
            console.log(this._bookList[i].bookName)
        }
    }
    addNewBook(nombreLibro, autor, ISBN, editorial) {
        if(this._capacity > 0){
            this._bookList.push(new Libro(nombreLibro, autor, ISBN, editorial))
            this._capacity--
        } else {
            console.log('ERROR: shelf alredy full\nMake a new one');
        }
    }
    
}

module.exports = Estante

/*const myShelf = new Estante('Romances')
myShelf.addNewBook('Pepe', 'Juan Torres Garcia', 161842, 'Ocean')

myShelf.bookList*/