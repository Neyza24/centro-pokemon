// export const types = {
//     registrar: '[Alta] Registrar',
//     actualizarEntrenador: '[Update] ActualizarEntrenador',
//     actualizarPokemon: '[Update] ActualizarEPokemon',
// }

//@ts-check
let nombre = 'hola';
console.log(nombre);

/**
 * @typedef{ object } person
 * @property{number} id
 * @property{number} edad
 * @property{string} nombre
 * @property{string} apellido
 * @property{boolean} estudiante
 */

/**
 * @type{person}
 */

let persona = {
    id: 1,
    edad: 24,
    nombre: 'Juan',
    apellido: 'Perez',
    estudiante: true
}

console.log(persona);

/**
 * @type{null}
 */
let apodo;