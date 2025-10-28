// Ejercicio 14 - operacionesMatematicas() con closures y funciones flecha
// Aleyda Quispe
function operacionesMatematicas() {
    var sumar = (a, b) => a + b;
    var restar = (a, b) => a - b;
    var multiplicar = (a, b) => a * b;
    var dividir = (a, b) => {
        if (b === 0)
            return "No se puede dividir entre cero.";
        else
            return a / b;
        };
    return {
        sumar: sumar,
        restar: restar,
        multiplicar: multiplicar,
        dividir: dividir
    };
}
var a = parseFloat(prompt("Ingrese el primer número:"));
var b = parseFloat(prompt("Ingrese el segundo número:"));

if (isNaN(a) || isNaN(b))
    alert("Ingrese valores numéricos");
else {
    var operador = operacionesMatematicas();
    var mensaje = "Resultados:\n";
    mensaje += "Suma: " + operador.sumar(a, b) + "\n";
    mensaje += "Resta: " + operador.restar(a, b) + "\n";
    mensaje += "Multiplicación: " + operador.multiplicar(a, b) + "\n";
    mensaje += "División: " + operador.dividir(a, b);
    alert(mensaje);
}