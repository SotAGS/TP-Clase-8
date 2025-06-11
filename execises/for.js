// a.
var palabras = ["javascript", "frontend", "backend", "servidor", "cliente"];
for (var i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

// b.
for (var i = 0; i < palabras.length; i++) {
    var capitalizada = palabras[i].charAt(0).toUpperCase() + palabras[i].substring(1);
    alert(capitalizada);
}

// c.
var sentence = "";
for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert(sentence.trim());

// d.
var numeros = [];
for (var i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log(numeros);
