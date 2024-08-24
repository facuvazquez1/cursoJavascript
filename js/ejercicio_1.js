// 1.Escriba un programa en donde el usuario ingrese 2 números e indique cuál es el mayor

const numberA = prompt('Ingresar Numero 1');
const numberB = prompt('Ingresar Numero 2');

if (numberA > numberB) {
    alert("El numero " + numberA + " es mayor que " + numberB);
}   if (numberA < numberB) {
    alert("El numero " + numberB + " es mayor que " + numberA);
} else {
    alert(numberA + " y " + numberB + " son iguales");
}