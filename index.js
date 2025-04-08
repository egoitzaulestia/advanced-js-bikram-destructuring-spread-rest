// RESUELVE LOS EJERCICIOS AQUÍ

// Ejercicios destructuring

// Ejercicio 1:
// Dado el objeto **empleados**, extrae la empleada Ana completa.

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana  = empleados[1]
// console.log(Ana)



// Ejercicio 2:
// Dado el objeto **empleados**, extrae el email del empleado Luis --> Luis@gmail.com

const emailLuis = empleados[0].email
console.log(emailLuis)



// Ejecicio 3:
// Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;

const arrayToDestructure = [];
arrayToDestructure.push(a);
arrayToDestructure.push(b);

[b, a] = arrayToDestructure;

// // Al final
// let a = 3;
// let b = 5;



// Ejecicio 4:
// Dado el objeto HIGH_TEMPERATURES cambiar las siguientes líneas para guardar mediante destructuración 
// los valores de temperaturas en las variables maximaHoy y maximaManana

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

// ```
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
// console.log(maximaHoy);
// console.log(maximaManana);
// ```

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;



// Ejecicio 5:
// Escribe una función llamada **sumEveryOther** que pueda recibir cualquier cantidad de números 
// y devuelva la suma de todos los demás argumentos.

const sumEveryOther = (...args) => {
    let result = 0;

    for (let i = 0; i < args.length; i++) {
        result += args[i]
    }

    return result;
}

// console.log(sumEveryOther(6, 8, 2, 3, 1)) // 20
// console.log(sumEveryOther(11, 3, 12)) // 26



// Ejercicio 6:
// Escribe una función llamada **addOnlyNums** que pueda recibir cualquier número de argumentos 
// (incluyendo números y strings y retorne la suma solo de los números).


const addOnlyNums = (...args) => {
    let result = 0;

    for (let i = 0; i < args.length; i++) {
        if (typeof(args[i]) === 'number') {
            result += args[i];
        }
    }

    return result;
}

// console.log(addOnlyNums(1, "perro", 2, 4)); // 7



// Ejercicio 7: 
// Escribe una función llamada **countTheArgs** que pueda recibir cualquier número de argumentos 
// y devuelva un número que indique cuántos argumentos ha recibido.
// ```

// ```

const countTheArgs = (...args) => {
    const numOfEmelents = args.length;

    return numOfEmelents;
}

// console.log(countTheArgs("gato", "perro")); // 2
// console.log(countTheArgs("gato", "perro", "pollo", "oso")); // 4



// Ejercicio 8:
// Escribe una función llamada **combineTwoArrays** que reciba dos array cómo argumentos 
// y devuelva solo un array que combine los dos (usando spread operator).

const combineTwoArrays = (array1, array2) => {
    const arrayFinal = [...array1, ...array2];
    
    return arrayFinal;
}



// Ejercicio 9:
// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos 
// y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...args) => {
    const uniques = [];

    for (let i = 0; i < args.length; i++) {
        for (let j = 0 + 1; j < args.length; j++){
            if (args[i] !== args[j] && (!uniques.includes(args[i]))){
                uniques.push(args[i]);
            }
        }
    }

    return uniques;
}

// console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
// console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));



// Ejercicio 10:
// Escriba una función llamada **combineAllArrays** que pueda recibir cualquier cantidad de arrays como argumentos 
// y los combine todos en un solo array.

// ```
// combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
// combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
// ```

const combineAllArrays = (...args) => {
    const concatArray = [];
    
    for (let i = 0; i < args.length; i++) {
        concatArray.push(...args[i])
    }

    return concatArray;
}

// console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
// console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]



// Ejercicio 11:
// Escriba una función llamada **sumAndSquare** que reciba cualquier número de argumentos, 
// los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...args) => {
    let result = 0;

    for (let i = 0; i < args.length; i++) {
        const operation = args[i] ** 2;
        result += operation
    }

    return result;
}