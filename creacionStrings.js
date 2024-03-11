/* Strings literals: Es lo que ponemos en el codigo dentro de las comillas
   Strings Values: Es el string que vemos en el inspector o en la terminal */

// Creacion de string
const primeraOpcion = 'Comillas simplles' 
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Comillas ladeadas`

// 1. Concatenacion: operador +
const direccion = "Presidente Roca 1259"
const ciudad = "Rosario"
const direccionCompleta = "Mi direccion completa es " + direccion + " " + ciudad

console.log(direccionCompleta);


// 2. Concatenacion: Template Literals

const nombre = "Nicolas"
const pais = "Argentina"
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion);

// 3. Concatenacion: join()

const primeraParte = "Me encanta"
const segundaParte = "la gente de"
const terceraParte = "Mexico"
const pensamiento = [primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(" "));

// 4. Concatenacion = concat()

const hobbie1 = "Gimnasio"
const hobbie2 = "Leer"
const hobbie3 = "Salir"
const hobbies = "Mis hobbies son: " .concat(hobbie1, ", ",hobbie2, ", ",hobbie3, ".")
console.log(hobbies);



// Caracteres de escape

// const whatDoIDo = 'I'm software engineer'

// 1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer"

// 2. Barra invertida
const escapeBarraInvertida = 'I\'m software engineer'

// 3. Template literals
const escapeComillaInvertida = `I'm software engineer`

// Como escribir strings largos.
/* 
    Las rosas son rojas,
    Las violetas so azules,
    Caracter inesperado,
    En la linea 86.
*/

const poema = "Las rosas son rojas, \n" + 
              "Las violetas son azules, \n" +
              "Caracter inesperado, \n" +
              "En la linea 86." 
console.log(poema);


const poema2 = 'Las rosas son rojas, \n\
                Las violetas son azules,\n\
                Caracter inesperado,\n\
                En la linea 86.'
console.log(poema2);


const poema3 = `Las rosas son rojas, 
                Las violetas son azules,
                Caracter inesperado,
                En la linea 86.`
console.log(poema3);