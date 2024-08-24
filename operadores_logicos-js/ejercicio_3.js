/* 
    3. Escriba un programa en donde se le pida un nombre y una edad al usuario. Muestre
    un mensaje en pantalla si:
    - El nombre es “Gabriel” y tiene más de 24 años
    - El nombre es “María” y tiene entre 28 y 35 años

*/

const nombre = prompt("Ingrese su nombre");
const edad = parseFloat(prompt("Ingrese una edad"));

if ((nombre == "Gabriel") && (edad > 24)) {
    alert("Su nombre es Gabriel y tiene mas de 24 años.")
} if ((nombre == "Maria") && (edad > 28) && (edad < 35)) {
    alert("Su nombre es Maria y tiene entre 28 y 35 años.")
}