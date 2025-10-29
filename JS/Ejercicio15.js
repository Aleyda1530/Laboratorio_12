// Ejercicio 15 - crearContador() con closures
// Aleyda Quispe

function crearContador() {
    var contador = 0;
    function incrementar() {
        contador = contador + 1;
        return contador;
    }
    function resetear() {
        contador = 0;
        return contador;
    }
    return {
        incrementar: incrementar,
        resetear: resetear
    };
}

var miContador = crearContador();
var opcion = "";
do {
    opcion = prompt("Elija una opción:\n1. Incrementar\n2. Resetear\n3. Salir");
    if (opcion === "1") {
        var nuevoValor = miContador.incrementar();
        alert("Contador incrementado: " + nuevoValor);
    } else if (opcion === "2") {
        miContador.resetear();
        alert("Contador reiniciado a 0.");
    } else if (opcion !== "3")
        alert("Opción no válida.");
} while (opcion !== "3");

alert("Programa finalizado.");
