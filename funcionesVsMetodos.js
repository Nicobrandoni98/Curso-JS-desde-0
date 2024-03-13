// Capacidades de las funciones al igual que otros objetos.

// 1. Pasar funciones como argumentos -> Callback (una funcion que se pasa como argumento)

function a () {}
function b (a) {}
b(a)

// Rertornar funciones

function a () { // Declaracion de funcion
    function b () {}
    return b
}

// Asignar funciones a variables -> Expresion de funcion

const a = function () {}

// Puede tener propiedades y metodos

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones -> Nested functions

function a () { 
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()


// Es posible almacenar funciones en objetos? SI.

const  rocket = {
    name: "Falcon 9",
    launchMessage: function launchMessage () {
        console.log("🔥");
    }
}
rocket.launchMessage()