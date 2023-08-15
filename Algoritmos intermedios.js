//toma un array de dos elementos y suma los valores desde el primero hasta el segundo
function sumAll(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    sum += i;
  }
  return sum;
}

//devuelve la diferencia simetrica de los dos arrays
function diffArray(arr1, arr2) {
  return arr1
    .filter((elemnt) => !arr2.includes(elemnt))
    .concat(arr2.filter((elemnt) => !arr1.includes(elemnt)));
}

//Elimina los elementos de arr marcados en el segundo argumento
function destroyer(arr, ...args) {
  const newArr = [...arr];
  args.forEach((elemnt) => {
    arr.forEach((elm) => {
      const index = newArr.indexOf(elemnt);
      if (index !== -1) newArr.splice(index, 1);
    });
  });
  return newArr;
}

//chequea que collection tiene al menos los mismos value pairs que source
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}

//transforma el string recibido en spinal case
const spinalCase = (str) =>
  str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();

//traduce la palabra a piglatin
function translatePigLatin(str) {
  const vowelRegex = /^[aeiou]/;
  const consonantRegex = /[^aeiou]/;

  if (vowelRegex.test(str)) return str + "way";

  const firstConsonants = str.match(consonantRegex);
  const restOfString = str.slice(firstConsonants.length);
  return restOfString + firstConsonants + "ay";
}

//reemplaza la palabra before con la palabra en after, manteniendo la capitalizacion de before
function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }

  return str.replace(before, after);
}

//crea el par de la cadena adn correspondiente a la entrada
function pairElement(str) {
  const halfPair = str.split("");

  return halfPair.map((base) => {
    let pair = "Unvalid";
    if (base === "A") pair = "T";
    if (base === "T") pair = "A";
    if (base === "C") pair = "G";
    if (base === "G") pair = "C";

    return [base, pair];
  });
}

//recorre el string con un fragmento del abecedario y devuelve la letra faltante, si es que hay, sino devuelve undefined
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str.split("").forEach((letter) => {
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++;
    } else {
      missing = String.fromCharCode(currCharCode);
    }
  });
  return missing;
}

//al recibir un array multidimensional, este devuelve un array con los numeros sin repeticiones
function uniteUnique(...arr) {
  const collapsedArr = arr.join(",").split(",");
  const resultArr = [];

  collapsedArr.forEach((num) => {
    if (resultArr.indexOf(+num) === -1) resultArr.push(+num);
  });
  return resultArr;
}

//recive una cadena y convierte las entidades html en su codigo corespondiente
function convertHTML(str) {
  const regex = /([&<>"'])/g;
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quote;",
    "'": "&apos;",
  };

  return str.replace(regex, (match) => htmlEntities[match]);
}

//esta funcion suma los valores de fibonacci que son inpares y que son menores al numero del paramtetro
function sumFibs(num) {
  let prevNum = 0;
  let currNum = 1;
  let sum = 0;

  while (currNum <= num) {
    if (currNum % 2) sum += currNum;

    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return sum;
}

//el siguiente es un grupo de tres funciones
//esta se encarga de chequear si un numero es o no primo
const checkPrimes = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
//esta crea un array de numeros primos
const getPrimes = (end) => {
  const primes = [];
  for (let i = 0; i <= end; i++) {
    if (checkPrimes(i)) primes.push(i);
  }
  return primes;
};
//esta suma todos los numeros primos hasta cierto numero enviado como parametro
function sumPrimes(num) {
  const primes = getPrimes(num);
  let result = 0;
  primes.forEach((prime) => (result += prime));
  return result;
}

//2 funciones que en conjunto me permiten obtener el minimo comun multiplo de los numeros encontrados entre el array enviado
//esta obtiene el maximo comun divisor de dos numeros, y si el segundo valor es 0 retorna el primero, sino vuelve a hacer la funcion pero convirtiendo el primer valor en el segundo y el segundo en el resto de ambos
const getGCD = (a, b) => {
  if (b == 0) return a;
  return getGCD(b, a % b);
};
//esta usa la funcion anterior para conseguir el MCM de la lista
// lo que hace es iterar desde el minimo numero dado hasta el mayor, y en cada iteracion redefine el MCM del grupo
function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let currentLCM = arr[0];
  for (let i = arr[0]; i <= arr[1]; i++) {
    currentLCM = (currentLCM * i) / getGCD(currentLCM, i);
  }
  return currentLCM;
}

//Esta funcion recibe un array y una funcion y filtra los elementos hasta que retorne un true
function dropElements(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result = arr.slice(i);
      break;
    }
  }
  return result;
}
/* LANZADORES
console.log(sumAll([1000, 4]));
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
console.log(spinalCase("thisIsSpinalTap"));
console.log(translatePigLatin("paragraphs"));
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
console.log(pairElement("ATCGA"));
console.log(fearNotLetter("stvwx"));
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(sumFibs(75025));
console.log(sumPrimes(10));
console.log(smallestCommons([2, 10]));
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
); */
