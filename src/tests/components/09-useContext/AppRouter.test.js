import { mount, shallow } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserCotext';

describe('Pruebas AppRouter', () => {

    const user= {
        name: 'Juan',
        email: 'jperez@gmail.com'
    }
  const wrapper = mount( <UserContext.Provider value={{ user }}><AppRouter /></UserContext.Provider>);

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
