
// inmutabilidad:
// tipo de dato primitivo - inmutable:
let numero = 23
numero = numero + 10
console.log(numero);
// el valor en realidad no cambia, solo que javascript lo que hace es crear un nuevo valor pero no cambia el valor original.

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero);





// mutabilidad: 
// tipo de dato complejo - mutable:
let usuario = { nombre: "Nicolas", edad: 15}
usuario.edad = 20
console.log(usuario);
// el valor original (15) se modifico al nuevo valor (20)

let frutas = ["manzana", "pera", "banana"]
frutas[0] = "sandia"
console.log(frutas);


function cambiarNombre (objeto) {
    objeto.nombre = "Nuevo nombre"
}

let persona = {nombre: "Juan"}
cambiarNombre(persona)

console.log(persona);