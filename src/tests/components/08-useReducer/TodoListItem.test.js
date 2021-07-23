import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import React from 'react';
import { demoTodos } from '../../fixtures/demoTodos';
describe('Pruebas TodoListItem', () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      i={0}
      handleDelete={handleDelete}
      handleToogle={handleToogle}
    />
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de llamar la funcion borrar', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('debe de llamar la funcion toggle', () => {
    wrapper.find('p').simulate('click');
    expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('debe de mostrarse el texto correctamente', () => {
    const p = wrapper.find('p').text();
    expect(p).toBe('1. ' + demoTodos[0].desc);
  });
  test('debe de tener la clase complete si el todo.done está en true', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        i={0}
        handleDelete={handleDelete}
        handleToogle={handleToogle}
      />
    );
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
