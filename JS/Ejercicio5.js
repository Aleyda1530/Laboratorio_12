// Ejercicio 5 - esMultiplo(a, b)
// Aleyda Quispe

function esMultiplo(a, b) {
    if (b === 0)
        return false;
    if (a % b === 0)
        return true;
    else
        return false;
}

var a = parseInt(prompt("Ingrese el primer número (a):"));
var b = parseInt(prompt("Ingrese el segundo número (b):"));

if (isNaN(a) || isNaN(b)) 
    alert("Ingrese valores numéricos válidos.");
else {
    var resultado = esMultiplo(a, b);
    if (resultado)
        alert(a + " es múltiplo de " + b + ".");
    else
        alert(a + " no es múltiplo de " + b + ".");
}