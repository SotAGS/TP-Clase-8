// a.
function sumaSimple(a, b) {
    return a + b;
}
var resultadoSuma = sumaSimple(4, 5);
console.log(resultadoSuma);

// b.
function sumaValidada(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}

// c.
function validateInteger(num) {
    return num % 1 === 0;
}

// d.
function sumaConEnteros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    if (!validateInteger(a)) {
        alert("Primer número no es entero, será redondeado");
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert("Segundo número no es entero, será redondeado");
        b = Math.round(b);
    }
    return a + b;
}

// e.
function redondearSiNoEntero(n) {
    if (!validateInteger(n)) {
        alert("Número no entero, se redondeará");
        return Math.round(n);
    }
    return n;
}

function sumaFinal(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    a = redondearSiNoEntero(a);
    b = redondearSiNoEntero(b);
    return a + b;
}
