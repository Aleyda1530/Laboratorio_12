// Ejercicio 10 - saludo(nombre) con función flecha
// Aleyda Quispe
var saludo = (nombre) => {
    return "Holasss, " + nombre ;
};

var nombre = prompt("Ingrese su nombre:");

if (nombre === null || nombre.trim() === "") {
    alert("Debe ingresar un nombre válido.");
} else {
    var mensaje = saludo(nombre);
    alert(mensaje);
}