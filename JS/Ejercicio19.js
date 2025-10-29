// Ejercicio 19 - mostrarDatos(nombre, edad, ...hobbies)
// Aleyda Quispe

function mostrarDatos(nombre, edad, ...hobbies) {
    var mensaje = "Nombre: " + nombre + "\n";
    mensaje += "Edad: " + edad + "\n";

    if (hobbies.length === 0)
        mensaje += "No ingresó hobbies";
    else
        mensaje += "Hobbies: " + hobbies.join(", ");
    return mensaje;
}
var nombre = prompt("Ingrese su nombre:");
var edad = parseInt(prompt("Ingrese su edad:"));

if (nombre === null|| isNaN(edad))
    alert("Debe ingresar un nombre y una edad válidos.");
else {
    var cantidad = parseInt(prompt("¿Cuántos hobbies desea ingresar?"));
    var listaHobbies = [];
    if (!isNaN(cantidad) && cantidad > 0) {
        for (var i = 0; i < cantidad; i++) {
            var hobbie = prompt("Ingrese el hobby " + (i + 1) + ":");
            if (hobbie !== null && hobbie.trim() !== "") {
                listaHobbies.push(hobbie);
            }
        }
    }
    var resultado = mostrarDatos(nombre, edad, ...listaHobbies);
    alert(resultado);
}