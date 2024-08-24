/* 5. Escriba un programa donde se le solicite el año de nacimiento. Si es mayor a 18 se
le tiene que pedir que ingrese su nombre y apellido para mostrarle un texto con el
formato: “Hola nombre apellido, tu edad actual es: edad”. Ejemplo: “Hola Rodrigo
Río, tu edad actual es 25”..*/

const anioNacimiento = parseInt(prompt("Ingresar año de nacimiento"));
const edad = 2024 - anioNacimiento;

if (anioNacimiento >= 18) {
    const nombreApellido = prompt("Ingresar nombre y apellido");
    alert("Hola " + nombreApellido + ", tu edad actual es: " + edad);
}