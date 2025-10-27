// Ejercicio 7 - promedio de 3 notas 
// Aleyda Quispe

var promedio = function(nota1, nota2, nota3) {
    var resultado = (nota1 + nota2 + nota3) / 3;
    return resultado;
};

var nota1 = parseFloat(prompt("Ingrese la primera nota:"));
var nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
var nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3))
    alert("Ingrese valores numéricos válidos.");
else {
    var resultado = promedio(nota1, nota2, nota3);
    alert("El promedio de las 3 notas es: " + resultado.toFixed(2));
}