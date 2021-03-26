
const nombreUsuario   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombreUsuario } ${ apellido }`;



export function getSaludo(nombre: string = 'David') {
    return 'Hola ' + nombre;
}

