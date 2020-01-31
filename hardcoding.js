/*
* Hardcoding - Quemado de valores
*
*/
let precio = parseInt(prompt('Ingrese el precio', 0))
let cantidad = parseInt(prompt('Ingrese la cantidad', 0))
let subtotal
let total


// Calculadora del IVA necesita dos valores.
// Puede por ejemplo, rellene de IVA% y el precio con IVA -
// y consigue el precio sin IVA como resultado.
// Los valores son redondeados (dos dígitos).
// Los valores son redondeados (dos dígitos).
// Los valores son redondeados (dos dígitos).
// Los valores son redondeados (dos dígitos).
// Los valores son redondeados (dos dígitos).


// Calculo del subtotal
subtotal = parseFloat(precio*cantidad)
console.log(`El subtotal es ${subtotal}`);

// Calculo del iva
total = parseFloat(subtotal + (subtotal * 0.12))

/*
// Calculo del subtotal
subtotal = parseFloat(precio*cantidad + (subtotal * 0.12))
console.log(`El subtotal es ${subtotal}`);

// Calculo del iva
subtotal = parseFloat(precio*cantidad + (subtotal * 0.12))
*/

//Calculo del total
console.log(total);
