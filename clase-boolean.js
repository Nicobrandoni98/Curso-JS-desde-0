const isActive = true
const hasPermisson = false

// Conversion implicita
const resultado = 5 > 3
console.log(resultado);

const name = "Platzi"
console.log(!!name);

// Conversion explicita
const value = 0
const otherValue = 1
const explicitBoolean = Boolean(value) // si es 0 me va a dar false, pero si es cualquier otro numero (positivo o negativo) me va dar true.
console.log(explicitBoolean);