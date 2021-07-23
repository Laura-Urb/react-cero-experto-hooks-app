import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserCotext';

describe('Pruebas HomeScreen', () => {

    const user= {
        name: 'Juan',
        email: 'jperez@gmail.com'
    }
  const wrapper = mount( <UserContext.Provider value={{ user }}><HomeScreen /></UserContext.Provider>);

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
