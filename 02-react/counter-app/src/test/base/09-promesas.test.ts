import { getHeroeByIdAsync } from '../../base/09-promesas';



describe('Pruebas con promesas', () => {

    const heroeToTest = {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    };

    const id = 1;


    test('debe de retornar un Héroe', (done) => {


        getHeroeByIdAsync(id).then(
            heroe => {
                expect(heroe).toEqual(heroeToTest);
                done();
            }
        );


    });

    test('debe retornar un que no econtro un Héroe', () => {

        const heroeToTest = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };

        const id = 10;

        getHeroeByIdAsync(id).catch(
            (error) => {
                expect(error).toBe('No se pudo encontrar el héroe');

            }
        );

    });

})
