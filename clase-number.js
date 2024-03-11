// 1. Tipo Entero y decimal.
const entero = 34
const decimal = 3.14
console.log(typeof entero, typeof decimal);

// 2. Notacion cientifica. 
const cientifico = 5e3
console.log(typeof cientifico);

// 3. Infinitos y NaN (Not A Number).
const infinito = Infinity
const noEsUnNumero = NaN
console.log(typeof infinito, typeof noEsUnNumero);



// Operaciones aritmeticas.

// 1. Suma, resta, multiplicacion y division.

const suma = 1 + 3
const resta = 3 - 1
const multiplicacion = 2 * 2
const division = 2 / 2
console.log(suma, resta, multiplicacion, division);

// 2. Modulo y Exponenciacion
const modulo = 15 % 8
const exponenciacion = 2 ** 3
console.log(modulo, exponenciacion);

// Precision
const resultado = 0.1 + 0.2
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3);

// Operaciones avanzadas 
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const numeroRandom = Math.random()
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(numeroRandom);