// Ejercicio 20 - ejecutarOperacion(fn, x, y)
// Aleyda Quispe

function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0)
        return "No se puede dividir entre cero.";
    else
        return a / b;
}
var x = parseFloat(prompt("Ingrese el primer número:"));
var y = parseFloat(prompt("Ingrese el segundo número:"));

if (isNaN(x) || isNaN(y)) 
    alert("Ingrese valores numéricos válidos.");
else {
    var opcion = prompt("Elija una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir");
    var resultado;

    if (opcion === "1") 
        resultado = ejecutarOperacion(sumar, x, y);
    else if (opcion === "2")
        resultado = ejecutarOperacion(restar, x, y);
    else if (opcion === "3")
        resultado = ejecutarOperacion(multiplicar, x, y);
    else if (opcion === "4")
        resultado = ejecutarOperacion(dividir, x, y);
    else
        resultado = "Opción no válida.";
    alert("Resultado: " + resultado);
}