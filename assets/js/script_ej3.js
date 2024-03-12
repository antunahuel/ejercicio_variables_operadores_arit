// SOLICITO LOS GRADOS CELCIUS AL USUARIO

var celcius=prompt("ingrese temperatura C°");

// GUARDO DATO EN VARIABLE celcius

var celcius=Number(celcius);

// CREO VARIABLES kelvin - fahrenheit CON OPERACIÓN MATEMÁTICA CORRESPONDIENTE
var kelvin = celcius + Number(273.15);
var fahrenheit = celcius * 9/5 + Number(32);

//IMPRIMO RESUTADO EN UNA ALERT Y POR CONSOLA DE NAVEGADOR

alert(`la temperetura ${celcius}°C... corresponde a ${kelvin} °k y ${fahrenheit}°F`)

console.log(kelvin);
console.log(fahrenheit);