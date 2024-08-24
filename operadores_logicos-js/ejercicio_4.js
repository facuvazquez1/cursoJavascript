/* 
    4) Escriba un programa en donde se le solicite al usuario que ingrese 2 números y le
    muestre en pantalla un mensaje cuando su suma sea 10 y su división tenga como
    resto 0.
*/

const numeroA = parseFloat(prompt("Ingresar numero 1"));
const numeroB = parseFloat(prompt("Ingresar numero 2"));

const suma = numeroA + numeroB
const resto = numeroA % numeroB

if ((suma == 10) && (resto == 0)) {
    alert("La suma es 10 y la división tiene resto 0")
} else {
    alert("Las condiciones no se cumplen.")
}