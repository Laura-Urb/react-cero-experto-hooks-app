import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
import React from 'react';

describe('Pruebas RealExampleRef', () => {
  const wrapper = shallow(<RealExampleRef />);

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });
  test('debe de mostrarse correctamente MultipleCustomHooks', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
