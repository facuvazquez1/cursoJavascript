/* 
    # Ejercicio 6: Escriba un programa en dónde se pida una cantidad de dinero en pesos, y se muestren las conversiones 
    en distintas monedas (Dólar, Euro y Libra)
*/

const peso = parseFloat(prompt("Ingresar valor en pesos"));

const dolar = peso * 0.0035;
const euro = peso * 0.00097;
const libra = peso * 0.00083;

alert("Peso a Dolar = " + dolar + " / " + "Peso a Euro = " + euro + " / " + "Peso a Libra = " + libra );