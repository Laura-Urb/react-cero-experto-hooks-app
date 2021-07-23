import { shallow } from 'enzyme';
import React from 'react';
import { HooksApp } from '../HooksApp';

describe('Pruebas HooksApp', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
