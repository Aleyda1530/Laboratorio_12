// Ejercicio 21 - filtrarArreglo(arr, callback)
// Aleyda Quispe

function filtrarArreglo(arr, callback) {
    var resultado = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i]))
            resultado.push(arr[i]);
    }
    return resultado;
}
function esPar(numero) {
    return numero % 2 === 0;
}
function mayorQueCinco(numero) {
    return numero > 5;
}
var cantidad = parseInt(prompt("¿Cuántos números desea ingresar en el arreglo?"));
var numeros = [];

if (isNaN(cantidad) || cantidad <= 0) {
    alert("Ingrese una cantidad válida.");
} else {
    for (var i = 0; i < cantidad; i++) {
        var num = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
        if (isNaN(num)) {
            alert("Valor no válido. Se tomará como 0.");
            num = 0;
        }
        numeros.push(num);
    }

    var opcion = prompt("Elija un filtro:\n1. Números pares\n2. Números mayores que 5");
    var resultado;

    if (opcion === "1")
        resultado = filtrarArreglo(numeros, esPar);
    else if (opcion === "2")
        resultado = filtrarArreglo(numeros, mayorQueCinco);
    else {
        resultado = [];
        alert("Opción no válida.");
    }
    alert("Arreglo original: " + numeros.join(", ") + 
    "\nResultado filtrado: " + resultado.join(", "));
}