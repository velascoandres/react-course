import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebas con el componente <CounterApp />', () => {
    
    test('Mostrar <CounterApp /> correctamante', () => {
        
        const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot();

    });


    test('Debe mostrar el valor de 100', () => {
        
        const valor = 100;

        const wrapper = shallow(<CounterApp value={valor} />);

        const numero = wrapper.find('h2').text().trim();

        expect(numero).toBe(valor.toString());

    });
    


});
