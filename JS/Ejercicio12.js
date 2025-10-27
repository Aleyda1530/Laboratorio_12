// Ejercicio 12 - Componer Transformaciones
// Aleyda Quispe

var convertirMayusculas = (texto) => {
    return texto.toUpperCase();
};

var agregarExclamacion = (texto) => {
    return texto + "!";
};

var componerTransformaciones = (funcion1, funcion2) => {
    return (texto) => {
        return funcion1(funcion2(texto));
    };
};

var transformar = componerTransformaciones(convertirMayusculas, agregarExclamacion);
var texto = prompt("Ingrese un texto");
if (texto === null)
    alert("Debe ingresar un texto: ");
else{
    var resultado = transformar(texto);
    alert("El texto transformado es: " + resultado);
}