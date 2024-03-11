// Strings: Primitivos y Complejos / tipo Objeto.

// Formas de escribir strings primitivos: Inmutables
const stringPrimitivo = "Soy un string primitivo"
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String("Soy un string primitivo tambien")
console.log(typeof stringPrimitivoTambien);


// Formas de escribir strings complejos: Mutables
const stringObjeto = new String("Soy un string objeto")
console.log(typeof stringObjeto);

// Acceder a caracteres

const saludo = "Hola. Como estas?"
console.log(saludo[3]);
console.log(saludo.charAt(3)) // Me dice que letra esta en la posicion 3
console.log(saludo.indexOf("o")); // Me dice la posicion en la que esta la primera letra "o"
console.log(saludo.indexOf("Como")); // Me dice donde empieza la palabra "Como"
console.log(saludo.indexOf("como")); // Si me da como resultado -1 es porque no existe
console.log(saludo.lastIndexOf("o")); // Me da la posicion de la ultima letra "o"
console.log(saludo.slice(3, 5)); // Me da lo que haya entre la posicion 3 y 5.
console.log(saludo.slice(3, saludo.length)); // lo mismo que arriba pero con todo
console.log(saludo.length); // me dice el tamaño del string
console.log(saludo.toLocaleUpperCase()); // Transforma el string en mayuscula
console.log(saludo.toLocaleLowerCase()); // Transforma el string en minuscula

const saludoDividido = saludo.split(" ") // Crea un array del string quitando lo que ponga entre parentesis (En este caso elimina los espacios)
console.log(saludoDividido);
console.log(saludoDividido[1]);

const saludoConEspacios = " Hola Mundo "
const saludoSinEspacios = saludoConEspacios.trim() //Trim le quita los espacios
console.log(saludoSinEspacios);

const saludoOriginal = "Hola Mundo"
const nuevoSaludo = saludoOriginal.replace("Mundo", "💚")
console.log(nuevoSaludo);