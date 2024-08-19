/*  # Ejercicio 4: Escriba un programa en donde se ingrese el nombre y el apellido, y se muestre un mensaje de bienvenida 
    con la concatenación del nombre y el apellido.
*/

const nombre = prompt("Ingrese su Nombre");
const apellido = prompt ("Ingrese su Apellido");

const nombreCompleto = nombre + " " + apellido;

alert("Bienvenido " + nombreCompleto);