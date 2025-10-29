// Ejercicio 24 - crearSecuencia(inicio, paso)
// Aleyda Quispe

function crearSecuencia(Inicio, paso){
    var actual = inicio;
    function siguiente(){
        var valor = actual;
        actual = actual + paso;
        return valor;
    }
    return siguiente;
}
var inicio = parseFloat(prompt("Ingrese el número de inicio: "));
var paso = parseFloat(prompt("Ingrese el paso de incremento: "));
if(isNaN(inicio) || isNaN(paso)) 
    alert("El inicio y paso deben ser valores numéricos")
else{
    var secuencia = crearSecuencia(inicio, paso);
    var opcion = "";

    do{
        opcion = prompt("Elija una opción: " + "\n 1. Mostrar siguiente n+umero " + "\n 2. Salir");
        if (opcion === "1"){
            var valor = secuencia();
            alert("Siguiente valor: " + valor);
        } else if (opcion !=="2")
            alert ("Opción no válida");
    } while (opcion !== "2");
}
