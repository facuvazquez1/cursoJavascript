/* 4. Escriba un programa en donde el usuario ingrese 3 notas, calcule el promedio y si es
mayor o igual a 4 le indique que está aprobado con un alert.*/

const noteA = parseFloat(prompt('Ingresar nota 1'));
const noteB = parseFloat(prompt('Ingresar nota 2'));
const noteC = parseFloat(prompt('Ingresar nota 3'));

const promedio = (noteA + noteB + noteC) / 3;

if (promedio >= 4) {
    alert("Estas aprobado, tu promedio es de: " + promedio);
} else {
    alert("Estas Desaprobado, tu promedio es de: " + promedio);
}