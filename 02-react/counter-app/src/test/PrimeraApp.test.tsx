import { render } from '@testing-library/react';
import PrimeraAPP from '../PrimeraApp';


describe('Pruebas en <PrimeraApp/>', () => {

    test('debe de mostrar el mensaje "Hola soy, Goku"', async () => {

        const saludo = "Hola soy, Goku";

        const { getByText } = render(<PrimeraAPP saludo="Hola soy, Goku" subtitulo="mensaje..." />);

        expect(getByText(saludo)).toBeInTheDocument() ;

    });



});
