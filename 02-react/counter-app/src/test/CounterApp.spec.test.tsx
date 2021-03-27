import { shallow, ShallowWrapper } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebas con el componente <CounterApp />', () => {

    let wrapper: ShallowWrapper;


    // Se va a ejecutar antes de cada una de los test
    beforeEach(
        () => {
            wrapper = shallow(<CounterApp />);
        }
    );

    test('Mostrar <CounterApp /> correctamante', () => {

        expect(wrapper).toMatchSnapshot();

    });


    test('Debe mostrar el valor de 100', () => {

        const valor = 100;

        const wrapper = shallow(<CounterApp value={valor} />);

        const numero = wrapper.find('h2').text().trim();

        expect(numero).toBe(valor.toString());

    });

    test('Debe de incrementar con el boton +1', () => {

        const btn1 = wrapper.find('button').at(0);
        btn1.simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');


    });


    test('Debe de decrementar con el boton -1', () => {

        const btn1 = wrapper.find('button').at(2);
        btn1.simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');


    });


    test('Debe de colocar el valor por defecto con el boton reset', () => {
    
        const valor = 105;

        const wrapper = shallow(<CounterApp value={valor} />);

        const btn1 = wrapper.find('button').at(0);
        const btnReset = wrapper.find('button').at(1);
        btn1.simulate('click');
        btn1.simulate('click');
        btnReset.simulate('click');
        // 105
        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('105');
    
    
    });
    




});
