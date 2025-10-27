// Ejercicio 4 - areaRectangulo(base, altura)
// Aleyda Quispe

function areaRectangulo(base, altura) {
    var area = base * altura;
    return area;
}

var base = parseFloat(prompt("Ingrese la base del rectángulo:"));
var altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

if (isNaN(base) || isNaN(altura))
    alert("Ingrese valores numéricos válidos.");
else {
    var resultado = areaRectangulo(base, altura);
    alert("El área del rectángulo es: " + resultado);
}