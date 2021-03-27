import { shallow } from 'enzyme';
import PrimeraAPP from '../PrimeraApp';


describe('Pruebas en <PrimeraApp/>', () => {

    //test('debe de mostrar el mensaje "Hola soy, Goku"', async () => {

    //const saludo = "Hola soy, Goku";

    //const { getByText } = render(<PrimeraAPP saludo="Hola soy, Goku" subtitulo="mensaje..." />);

    //expect(getByText(saludo)).toBeInTheDocument();

    //});

    test('debe de mostrar  <PrimeraApp/> correctamente', () => {
        

        // shallow es similar al render
        const wrapper = shallow(<PrimeraAPP saludo="Hola soy, Goku" subtitulo="mensaje..." />);
        

        // toma una "fotografia para ver como se encuentra el componente renderizado"
        expect(wrapper).toMatchSnapshot(); // El componente concuerde con el snapshot

    });

    test('debe de mostrar el subitulo en "mensaje..." en <PrimeraApp/> correctamente', () => {
        

        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'mensaje...';

        // shallow es similar al render
        const wrapper = shallow(<PrimeraAPP saludo={saludo} subtitulo={subtitulo} />);
        
        // El find es similar al document.querySelector
        const textoParrafo =wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);

    });
    

});
