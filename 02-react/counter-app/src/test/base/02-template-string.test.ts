import { getSaludo } from '../../base/02-template-string';



describe('Pruebas en 02-template-string.ts', () => {
    test('getSaludo debe retornar: Hola Andres', () => {
        const nombre = 'Andres';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola Andres');
        
    });


    test('getSaludo debe retornar: Hola David, si no hay argumentos en el nombre', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola David');
        
    });
    
});
