const prompt = require('prompt-sync')({sigint : true})
const Estante = require('./Estante.js');



class Libreria {
    constructor(nombreLibreria) {
        this._libraryName = nombreLibreria
        this._shelfList = []
    }
    get libraryName() {
        return this._libraryName
    }
    get shelfList() {
        return this._shelfList
    }

    listShelfs() {
                for(let i=0; i<this._shelfList.length; i++) {
            console.log(i+' '+this._shelfList[i].shelfName);
        }
    }
    getShelf(indexShelf) {
        this._shelfList[indexShelf]
    }
    createNewShelf(shelfName) {
        this._shelfList.push(new Estante(shelfName))
    }
    addBookToShelf(indexShelf = 0,nombreLibro, autor, ISBN, editorial) {
        this._shelfList[indexShelf].addNewBook(nombreLibro, autor, ISBN, editorial)
    }
    showShelfElements(indexShelf) {
        this._shelfList[indexShelf].bookList
    }
    deleteShelf(indexShelf) {
        console.log(this._shelfList[indexShelf]._shelfName + ' was eliminated');
        this._shelfList.slice(indexShelf, 1)
    }

}

const myLibreria = new Libreria('Lukitas\'s Library')
let userOption
let indexShelf, nombreLibro, author, ISBN, editorial
console.log('Welcome to '+myLibreria.libraryName);
do {
    console.log('\nWhat do you want to do:');
    console.log('|1-Create a new shelf|2-Add a book to a shelf|3-Delete a shelf|4-List books in a shelf|5-List all the shelfs|0-EXIT|');
    userOption = parseInt(prompt())
    switch (userOption) {
        case 1:
            myLibreria.createNewShelf(prompt('Write the name of the new shelf: '))
            break;
        case 2:
            if(myLibreria._shelfList.length < 1) {
                console.log('First you need to create a shelf')
                break;
            }
                console.log('Write the shelf index number: ');
                indexShelf = parseInt(prompt())

                console.log('Write the book\'s name: ');
                nombreLibro = prompt()

                console.log('Write the book\'s author: ');
                author = prompt()

                console.log('Write the book\'s ISBN: ');
                ISBN = prompt()

                console.log('Write the book\'s editorial: ');
                editorial = prompt()
                
                myLibreria.addBookToShelf(indexShelf, nombreLibro, author, ISBN, editorial)
            break;
        case 3:
              if(myLibreria._shelfList.length < 1) {
                console.log('There is no shelf yet')
                break;
            }
            console.log('Write the shelf identifier');
            myLibreria.deleteShelf(parseInt(prompt()))
            break;
        case 4:
             if(myLibreria._shelfList.length < 1) {
                console.log('First you need to create a shelf')
                break;
            }
            console.log('Write the shelf identifier');
            myLibreria._shelfList[parseInt(prompt())].bookList
            break;    
        case 5:
             if(myLibreria._shelfList.length < 1) {
                console.log('First you need to create a shelf')
                break;
            }
            myLibreria.listShelfs()
            break;
        case 0:
            break;
        default:
            console.log('Unvalid option');
            break;
    }
} while (userOption != 0);


/*myLibreria.createNewShelf('Romances')

for(let i = 0; i<51; i++) {
    myLibreria.addBookToShelf(0, `Pepe${i}`, 'Juan Torres Garcia', 161842, 'Ocean')
}

myLibreria.showShelfElements(0)*/