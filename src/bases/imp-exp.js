import { heroes } from '../data/heroes';

const getHeroesById = (id) => {
    return heroes.find(data => data.id === id);
}

// console.log(getHeroesById(3));

const getHeroesByOwner = (owner) => {
        return heroes.filter(data => data.owner === owner);
    }
    // console.log(getHeroesByOwner('DC'));

// console.log(owners);

export { getHeroesById, getHeroesByOwner };