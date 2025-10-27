// Ejercicio 9 - calcularDescuento(precio, porcentaje)
// Aleyda Quispe
var calcularDescuento = function(precio, porcentaje) {
    var descuento = (precio * porcentaje) / 100;
    var total = precio - descuento;
    return total;
};

var precio = parseFloat(prompt("Ingrese el precio del producto:"));
var porcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

if (isNaN(precio) || isNaN(porcentaje))
    alert("Ingrese valores numéricos válidos.");
else {
    var resultado = calcularDescuento(precio, porcentaje);
    alert("El precio final con descuento es: " + resultado.toFixed(2));
}
