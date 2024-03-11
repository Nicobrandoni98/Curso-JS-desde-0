//Paso por Valor - valores primitivos
/* 1. Paso por Valor:
En el paso por valor, se pasa una copia del valor de la variable como argumento a la función.
Esto significa que cualquier modificación realizada dentro de la función no afecta a la variable original fuera de la función.
Este enfoque es común en lenguajes que trabajan con tipos de datos primitivos (números, strings, booleanos, etc.). */

/*  Paso por valor
Es copiar y pegar un archivo en windows cambiándole el contenido */

let x = 1
let y = "Hola"
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c);

a = 12
b = "Platzi"
c = undefined

// Paso por Referencia - valores complejos
/* 2. Paso por Referencia:

En el paso por referencia, se pasa la referencia a la ubicación en memoria de la variable como argumento a la función. Cualquier modificación realizada dentro de la función afecta directamente a la variable original fuera de la función. Este enfoque es común en lenguajes que trabajan con objetos y estructuras de datos más complejas. */

/* Paso por referencia
Es crear un acceso directo, asi los cambios que hagas en el "nuevo" archivo son referenciados al archivo original */

let frutas = ["manzana"]
frutas.push("pera")
console.log(frutas);

let panes = ["🥖"]
let copiaDePanes = panes
panes.push("🥐")
copiaDePanes.push("🍔")
console.log(panes, copiaDePanes);