// Ejercicio 8 - convertirAMayusculas(texto)
// Aleyda Quispe

var convertirAMayusculas = function(texto) {
    var resultado = texto.toUpperCase();
    return resultado;
};

// Interacción con el usuario
var texto = prompt("Ingrese un texto:");

if (texto === null)
    alert("Debe ingresar un texto válido.");
else {
    var resultado = convertirAMayusculas(texto);
    alert("El texto en mayúsculas es: " + resultado);
}