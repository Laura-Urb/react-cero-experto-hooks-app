import { useForm } from '../../hooks/useForm';
import { act, renderHook } from '@testing-library/react-hooks';

describe('Pruebas useForm', () => {
  const initialState = {
    name: 'Juan',
    email: 'jperez@gmail.com',
  };
  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialState));
    const [value, handleInputChange, reset] = result.current;
    expect(value).toEqual(initialState);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });
  test('debe de cambiar el valor del formulario', () => {
    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Roberto',
        },
      });
    });
    const [formValue] = result.current;
    expect(formValue).toEqual({ ...initialState, name: 'Roberto' });
  });
  test('debe de resetear el formulario ', () => {
    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({ target: { name: 'name', value: 'Roberto' } });
      reset();
    });
    const [formValue] = result.current;
    expect(formValue).toEqual(initialState);
  });
});
