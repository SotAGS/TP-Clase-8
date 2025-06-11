var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a.
console.log(meses[4]); // Mayo
console.log(meses[10]); // Noviembre

// b.
console.log(meses.sort());

// c.
meses.unshift("Inicio");
meses.push("Fin");

// d.
meses.shift();
meses.pop();

// e.
meses.reverse();

// f.
var unidos = meses.join("-");

// g.
var copia = meses.slice(4, 11); // Mayo (índice 4) a Noviembre (índice 10)
