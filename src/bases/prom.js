import { getHeroesById } from './imp-exp';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         const heroe = getHeroesById(2);
//         resolve(heroe);
//         reject(heroe);
//         // console.log(heroe);
//     }, 2000);

// });

// promesa.then((heroe) => {
//         console.log('heroe:', heroe)
//     })
//     .catch(err => {
//         console.warn(err)
//     });


const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {

        setTimeout(() => {

            const heroe = getHeroesById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se puede encontrar el heroe');
            }
            // console.log(heroe);
        }, 2000);

    });

    return promesa;
}

getHeroeByIdAsync(1)
    .then(console.log)
    // .catch(err => console.log('No se encuentra el heroe'))
    .catch(console.warn)