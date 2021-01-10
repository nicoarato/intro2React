// const foo = nombre => ({
//     uid: 'asd123',
//     username: nombre,
// });

// console.log(foo('Nico'));

// Desestructuración
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre: primerNombre } = persona;

// const { nombre, edad, clave } = persona;

// console.log(primerNombre)
// console.log(nombre)
// console.log(edad)
// console.log(clave)

// const retornaPersona = ({ nombre, edad, rango = 'soldador' }) => {
//     console.log(nombre, edad, rango);
// }



const retornaPersona = ({ clave, edad }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlon: {
            lat: 14.46464,
            lng: 14.5454,
        }
    }
};

const { nombreClave, anios, latlon: { lat, lng } } = retornaPersona(persona);

console.log(nombreClave, anios)
console.log(lat, lng)