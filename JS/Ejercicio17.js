// Ejercicio 17 - saludo(nombre = "Amigo")
// Aleyda Quispe

function saludo(nombre = "Amig@") {
    return "Hola, " + nombre + "!";
}

var nombreIngresado = prompt("Ingrese su nombre: ");

if (nombreIngresado === null || nombreIngresado.trim() === "")
    alert(saludo());
else
    alert(saludo(nombreIngresado));