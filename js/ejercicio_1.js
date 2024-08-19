// Consiga 1: escriba un programa en donde el usuario ingrese la base y la altura, y se calcule el área del triángulo.

alert("Bienvenido a la calculadora del area de un triangulo");

const trianguloBase = parseFloat(prompt("Ingresar la base de su triangulo"));

const trianguloAltura = parseFloat(prompt("Ingresar la altura de su triangulo"));

const trianguloArea = trianguloBase * trianguloAltura / 2 + " mts";

alert("El area de su triangulo es: ");