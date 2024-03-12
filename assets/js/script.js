//EJERCICIO DOS

//SE SOLICITA AL USUARIO QUE INGRESE DOS NUMEROS
//ESTOS SERAN GUARDADOS EN VARIABLES CORRESPONDIENTES 

var num1=prompt("ingrese primer número");
var num2=prompt("ingrese segundo numero");

//CREO OBJETO NUMERICO

var num1=Number(num1);
var num2=Number(num2);

//CREO VARIABLES SUMA - RESTA - MULTIPLICACION - DIVISION - MODULO PARA ALMACENAR RESULTADO DE ESTAS OPERACIONES

 var suma = num1 + num2;
 var resta = num1 - num2;
 var multiplicacion = num1 * num2;
 var division = num1 / num2;
 var modulo = num1 % num2;

 //IMPRIMO RESULTADOS EN DOCUMENTO HMTL Y POR CONSOLA

document.write(`El resultado de suma es: ${suma} el de resta es: ${resta} el de división es ${division} el de modulo ${modulo}`);
console.log(`El resultado de suma es: ${suma} el de resta es: ${resta} el de división es ${division} el de modulo ${modulo}`);

