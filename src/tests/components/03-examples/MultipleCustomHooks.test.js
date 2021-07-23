import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas MultipleCustomHooks', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      state: 10,
      increment: () => {},
    });
  });
  test('debe de mostrarse correctamente ', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrarse la informacion ', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Juan',
          quote: 'Hello',
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-3').text().trim()).toBe('Hello');
    expect(wrapper.find('footer').text().trim()).toBe('Juan');
  });
});
