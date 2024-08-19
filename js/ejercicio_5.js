/*  Ejercicio 5: escriba un programa en dónde se ingresen 3 números y se calcule el promedio.
    Formula: sumar todos los numeros y dividirlos por la cantidad de numeros que hay, en este caso 3. 
*/

const numeroUno = parseFloat(prompt("Ingresa el primer numero"));
const numeroDos = parseFloat(prompt("Ingresa el segundo numero"));
const numeroTres = parseFloat(prompt("Ingresa el tercer numero"));

const promedio = (numeroUno + numeroDos + numeroTres) / 3;

alert("El promedio de los 3 valores ingresados es: " + promedio);
