// Ejercicio 13 - procesarTexto con funciones internas
// Aleyda Quispe
function procesarTexto(texto) {

    function limpiarEspacios(cadena) {
        var limpio = cadena.trim();
        limpio = limpio.replace(/\s+/g, " ");
        return limpio;
    }
    function contarPalabras(cadena) {
        if (cadena === "") {
            return 0;
        } else {
            var palabras = cadena.split(" ");
            return palabras.length;
        }
    }
    var textoLimpio = limpiarEspacios(texto);
    var cantidad = contarPalabras(textoLimpio);
    return "Texto procesado: " + textoLimpio + "\nNúmero de palabras: " + cantidad;
}
var textoUsuario = prompt("Ingrese un texto para procesar:");
if (textoUsuario === null || textoUsuario.trim() === "")
    alert("Debe ingresar un texto válido.");
else {
    var resultado = procesarTexto(textoUsuario);
    alert(resultado);
}