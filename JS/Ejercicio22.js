// Ejercicio 22 - descargarArchivo(url, callback)
// Aleyda Quispe

function descargarArchivo(url, callback){
    alert("Descargando ...");
    setTimeout(function() {callback(url)},2000);
}
function mostrarMensaje(url) {
    alert("Descargar completa de " + url);
}

var enlace = prompt("Ingrese la URL del archivo a descargar");
if(enlace === null)
    alert("Debe ingresar una URL válida");
else
    descargarArchivo(enlace, mostrarMensaje);
