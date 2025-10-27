// Ejercicio 6 - mayorDeTres(a, b, c)
// Aleyda Quispe
function mayorDeTres(a, b, c){
    var mayor;
    if (a >= b && a >= c)
        mayor = a;
    else if (b >= a && b >= c)
        mayor = b;
    else 
        mayor = c;

    return mayor;
}
var a = parseFloat(prompt("Ingrese el primer número:"));
var b = parseFloat(prompt("Ingrese el segundo número:"));
var c = parseFloat(prompt("Ingrese el tercer número:"));

if (isNaN(a) || isNaN(b) || isNaN(c))
    alert("Ingrese solo valores numéricos válidos.");
else
    var resultado = mayorDeTres(a, b, c);
    alert("El mayor de los tres números es: " + resultado);