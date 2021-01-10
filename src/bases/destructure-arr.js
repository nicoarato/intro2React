const personajes = ['Leonidas', 'Juancito', 'Homero'];

const [, , p1] = personajes;

console.log(p1);

const retornaArray = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArray();

console.log(letras, numeros);

const usaState = (valor) => {
    return [valor, () => {
        console.log('Hola mundo');
    }];
}

const arre = usaState('Karma');
console.log(arre);
arre[1](); //llamada horrible

const [nombre, settNombre] = arre;

console.log(nombre);
settNombre();