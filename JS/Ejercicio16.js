// Ejercicio 16 - acumulador(valorInicial)
// Aleyda Quispe

function acumulador(valorInicial) {
    var total = valorInicial;
    function sumar(nuevoValor) {
        total = total + nuevoValor;
        return total;
    }
    return sumar;
}
var inicio = parseFloat(prompt("Ingrese el valor inicial del acumulador:"));

if (isNaN(inicio))
    alert("Ingrese un número válido.");
else {
    var acumular = acumulador(inicio);
    var opcion = "";
    do {
        opcion = prompt("Elija una opción:\n1. Sumar un valor\n2. Salir");

        if (opcion === "1") {
            var valor = parseFloat(prompt("Ingrese un valor para sumar:"));
            if (isNaN(valor))
                alert("Ingrese un número válido.");
            else {
                var nuevoTotal = acumular(valor);
                alert("Nuevo total acumulado: " + nuevoTotal);
            }
        } else if (opcion !== "2")
            alert("Opción no válida.");
    } while (opcion !== "2");
}
