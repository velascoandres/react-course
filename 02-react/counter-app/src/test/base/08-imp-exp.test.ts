import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import { heroes } from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {

    test('Debe de retornar un héroe por id', () => {

        const id = 2;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(hero => hero.id === id);
        

        expect(heroe).toEqual(heroeData);

    });


    test('Debe de retornar undefined si el heroe no existe', () => {

        const id = 10;

        const heroe = getHeroeById(id);        

        expect(heroe).toEqual(undefined);

    });


    test('Debe de retornar un arreglo con los heroes de DC', () => {


       const heroesDC = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ];

        const heroesFiltrados = getHeroesByOwner('DC');        

        expect(heroesFiltrados).toEqual(heroesDC);

    });


    test('Debe de retornar un arreglo con los heroes de Marvel', () => {

        const heroesMarvel = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ];
        
        
        const heroesFiltrados = getHeroesByOwner('Marvel');        

        expect(heroesFiltrados).toEqual(heroesMarvel);

    });

});
