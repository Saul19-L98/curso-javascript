var nombre = 'Saul', apellido = 'Lainez',edad = 22;
var nombreCompleto = `${nombre.toUpperCase()} ${apellido.toLocaleLowerCase()}`;

function imprimirEdad(n,e){
    console.log(`${n} tiene ${e} años`)
}
imprimirEdad(nombre,edad);