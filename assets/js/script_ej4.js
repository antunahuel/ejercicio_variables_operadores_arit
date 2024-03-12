
// declaro variable donde capturo dato donde se ingresa cantidad de días

var ingreso_dias = prompt("ingresa cantidad de días");
// calculo los días ingresado en año
var anio = Math.floor(ingreso_dias / 365);
// claculo el resto en días de la cantidad ingresada de los días de un año
var resto_anio= ingreso_dias%365;
//caluclo las semanas
var semana =Math.floor(resto_anio/7);
// finalmente calculo los días
var dias=resto_anio%7;

// imprimo en documento
document.writeln (`AÑO: ${anio} SEMANA: ${semana} DÍAS: ${dias}`);
// imprimo por consola
console.log(anio, semana, dias);



