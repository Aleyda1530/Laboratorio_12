// Ejercicio 11 - esPositivo(numero) con función flecha
// Aleyda Quispe
var esPositivo = (numero) => {
    if (numero > 0)
        return true;
    else
        return false;
}

var numero = parseFloat(prompt("Ingrese un número: "));
if (isNaN(numero))
    alert("Ingrese un valor numérico")
else {
    var resultado = esPositivo(numero);
    if(resultado)
        alert("El número " + numero + "es positivo");
    else
        alert("El número " + numero + "no es positivo");
}