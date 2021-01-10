// objects literals
const persona = {
    nombre: 'Nico',
    apellido: 'Arato',
    edad: 30,
    direccion: {
        calle: 'San Pedrao',
        ciudad: 'Brasil',
        cp: '1000',
    }
};
// console.table(persona);

// const persona2 = persona;
const persona2 = {...persona }
persona.nombre = 'Leo';
console.log(persona)
console.log(persona2)