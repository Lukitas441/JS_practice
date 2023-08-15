//devuelve la palabra mas larga de un string
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let palabraMasLarga = "";

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (word.length > palabraMasLarga.length) palabraMasLarga = word;
  }

  return palabraMasLarga;
}

//devuelve los numeros mas grandes en un array
function largestOfFour(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let biggerNum = arr[i][0];
    for (let j = 0; j < arr.length; j++) {
      if (biggerNum < arr[i][j]) biggerNum = arr[i][j];
    }
    newArr.push(biggerNum);
  }
  return newArr;
}

//invertir un string
const reverseString = (str) => str.split("").reverse().join("");

//halla el primer numero de un array que cumpla la funcion enviada
function findElement(arr, func) {
  let number = 0;
  arr.forEach((num) => {
    if (number === 0) {
      if (func(num)) {
        number = num;
      }
    }
  });
  return number === 0 ? undefined : number;
}

//devuelve el string con la primera letra de cada palabra en mayusculas
const titleCase = (str) =>
  str.replace(
    /\b(\w[\w']*)/g, //filtro encargado de separar todo el string en palabras individuales
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );

//Esta funcion devuelve verdadero si la primera palabra contiene todas las letras de la siguiente palabra
function mutation(arr) {
  const [str1, str2] = arr.map(v => v.toLowerCase())

  for(let i = 0; i < str2.length; i++) {
    const letter = str2[i]
    if(str1.indexOf(letter) === -1) return false
  }
  return true
}

/* console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); */
/* console.log(reverseString("Hola Mundo")); */
console.log(findElement([2, 5, 1, 5], (num) => num % 2 === 0));

const arr = [1, 2, 3]
const arr2 = ['4', '5', '6']
const n = 2

arr2.splice(n, arr)