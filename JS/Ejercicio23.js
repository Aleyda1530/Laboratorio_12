// Ejercicio 23 - potencia(base, exponente) recursiva
// Aleyda Quispe

function potencia(base, exponente) {
    if(exponente === 0)
        return 1;
    else
        return base*potencia(base, exponente -1);
}

var base = parseFloat(prompt("Ingrese la base: "));
var exponente = parseInt(prompt("Ingrese el exponente (debe ser un entero positivo)"));

if(isNaN(base) || isNaN(exponente) || exponente < 0)
    alert("Base o exponente no válido");
else
    var resultado = potencia(base,exponente);
alert(base + " eleveado al exponente "+ exponente + " es igual a: " + resultado);