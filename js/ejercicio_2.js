/* 2. El costo del helado es de $5. Escriba un programa en donde se le pida al usuario 
ingresar la cantidad de helados que quiere y mostrar cuánto le saldría */

const cantidadHelado = parseFloat(prompt("Ingresar cantidad de helados"));

const precioHelado = cantidadHelado * 5;

alert("El saldo a abonar es de: " + "$" + precioHelado)