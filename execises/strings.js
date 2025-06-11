// a.
var texto = "universidadabiertainteramericana";
var mayuscula = texto.toUpperCase();

// b.
var texto2 = "Programacion";
var primeros5 = texto2.substring(0, 5);

// c.
var ultimos3 = texto2.substring(texto2.length - 3);

// d.
var texto3 = "programacionweb";
var primeraMayus = texto3.substring(0, 1).toUpperCase() + texto3.substring(1).toLowerCase();

// e.
var texto4 = "programacion web";
var espacio = texto4.indexOf(" ");

// f.
var texto5 = "programador javascript";
var espacio2 = texto5.indexOf(" ");
var palabraA = texto5.substring(0, espacio2);
var palabraB = texto5.substring(espacio2 + 1);
var resultadoFinal = palabraA.substring(0, 1).toUpperCase() + palabraA.substring(1).toLowerCase() + " " +
                     palabraB.substring(0, 1).toUpperCase() + palabraB.substring(1).toLowerCase();
