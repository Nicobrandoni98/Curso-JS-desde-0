// Funciones Puras

// En las funciones puras, dada una misma entrada (input), obtendremos una misma salida (output). Por otro lado, las funciones puras no deben tener efectos secundarios (side effects).

/* Qué nos puede causar side effects:

1- Modificar variables globales.
2- Modificar parámetros.
3- Solicitudes HTTP.
4- Impresiones de mensajes en pantalla o consola.
5- Manipulación del DOM (Document Obect Model).
6- Obtener la hora actual. */ 

function suma (a, b) {
    return a + b;
}


// Funciones impuras 

function suma (a, b) {
    console.log("A: ", a);
    return a + b;
}

let total = 0

function sumaConSideEffect (a) {
    total += a// el += es lo mismo que decir total = total + a (es decir que toma el vamor de total y suma con el otro parametro)
    return total
}

// Funcion pura
function square(x) {
    return x * x
}

// Funcion pura
function addTen (y) {
    return y + 10
}

// Funcion pura
const number = 5 
const finalResult = addTen(square(number))
console.log(finalResult);