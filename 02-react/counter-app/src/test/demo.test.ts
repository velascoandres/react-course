import '@testing-library/jest-dom';

describe('Pruebas en el archivo demos.tests.js', () => {

    test('Deben de se iguales los strings', () => {
        // 1. Inicializacion
        const mensaje = 'Hola Mundo';

        // 2. Estimulo
        const mensaje2 = 'Hola Mundo';

        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2)
    });

});

