// Ejercicio 3 - esPar(num)
// Aleyda Quispe

function esPar(num) {
    if (num % 2 === 0)
        return true;
    else
        return false;
}

var numero = parseInt(prompt("Ingrese un número:"));

if (isNaN(numero)) {
    alert("Ingrese un número válido.");
} else
    var resultado = esPar(numero);   
    if (resultado)
        alert("El número " + numero + " es par.");
    else
        alert("El número " + numero + " no es par.");