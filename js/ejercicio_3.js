/*  Consiga 3: Escriba un programa en dónde se ingresen grados Celsius y 
    se transformen a grados Fahrenheit.
    Formula: F = (°C x 1.8) + 32
*/

alert ("Bienvenidos al convertidor de Grados Celsius a Fahrenheit");

const gradosCelsius = parseInt(prompt("Ingresar Grados Celcius"));

const gradosFahrenheit = gradosCelsius * 1.8 + 32;

alert("En grados Fahrenheit es: " + gradosFahrenheit);