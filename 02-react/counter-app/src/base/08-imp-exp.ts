import { heroes, IHeroe } from "../data/heroes";


export const getHeroeById = (id: number) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner: string ) => heroes.filter( (heroe: IHeroe) => heroe.owner === owner );




