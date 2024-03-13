// Null
const snoopy = null
console.log(snoopy);
console.log(typeof snoopy);


// Undefined
let name 
console.log(name);
console.log(typeof name);


// Symbol: Para escribir valores que queremos que sean unicos, que no cambien.
const uniqueId = Symbol("id")
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2); // Aunque tengan el mismo valor, el programa los toma como que son completamente distintos.

const ID = Symbol("id")
let user = {}
user[ID] = "1234"
console.log(user);


// Bigint: Nos ayuda con los numeros grandes (normalmente se usan para calculos matematicos)
const bigNumber = 123142412412981585848053045912031284815n
console.log(bigNumber);

const numberOfParticlesInTheUniverse = 1000000000000000000000000000000000000n
console.log(numberOfParticlesInTheUniverse);