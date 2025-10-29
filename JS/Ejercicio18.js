// Ejercicio 18 - media(...numeros)
// Aleyda Quispe

function media(...numeros) {
    if (numeros.length === 0)
        return 0;
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    var promedio = suma / numeros.length;
    return promedio;
}
var cantidad = parseInt(prompt("¿Cuántos números desea ingresar para calcular la media?"));

if (isNaN(cantidad) || cantidad <= 0) {
    alert("Ingrese una cantidad válida.");
} else {
    var lista = [];
    for (var i = 0; i < cantidad; i++) {
        var num = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
        if (isNaN(num)) {
            alert("Valor no válido. Se tomará como 0.");
            num = 0;
        }
        lista.push(num);
    }
    var resultado = media(...lista);
    alert("La media de los números ingresados es: " + resultado.toFixed(2));
}
