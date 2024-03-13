/* let precioOriginal = 10000
let descuentoPorcentaje = 20
function calcularDescuento(precio, descuentoPorcentaje) {
    const descuento = (precio * descuentoPorcentaje) / 100
    const precioConDescuento = precio - descuento
    return precioConDescuento
}
const precioFinal = calcularDescuento(precioOriginal, descuentoPorcentaje)
console.log("El precio original es: $" + precioOriginal);
console.log("El porcentaje del dscuento es de: %" + descuentoPorcentaje);
console.log("El precio con el descuento es de: $" + precioFinal);
 */



// ---------------------------------------------------------------------------




// Definicion de una funcion que calcula el precio con descuento
function calculateDiscountedPrice (price, discountPercentage) {
        // Calcula el monto del descuento
        const discount = (price * discountPercentage) / 100

        // Calcula el precio con descuento restando el descuento del precio original
        const priceWithDiscount = price - discount

        // Devuelve el precio con descuento
        return priceWithDiscount
}
// Declaracion de variables 
const originalPrice = 100 // Precio original antes del descuento
const discountPercentage = 20 // Porcentaje de descuento a aplicar

// Llamada a la funcion para calcular el precio con descuento
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)


// Imprime en la consola un objeto con las variables relevantes
console.log('El precio original es: $' + originalPrice);                 //Precio original
console.log('El porcentaje de descuento es: ' + discountPercentage+'%');// Porcentaje de descuento
console.log('El precio con descuento es: $' + finalPrice);               // Precio final después del descuento

