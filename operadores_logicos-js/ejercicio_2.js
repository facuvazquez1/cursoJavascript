/* 2. Escriba un programa que le pida una letra al usuario y le diga si es una vocal o no. 
    “a”, “e”, “i”, “o” y “u”
*/

const letra = prompt("Ingresar una letra")

if ( ( letra == "a") || ( letra == "e") || ( letra == "i") || ( letra == "o") || ( letra == "u") ) {
alert("Ingresaste una vocal");
} else {
alert ("No es una vocal");
}