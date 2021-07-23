import { act, renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas useFetch', () => {
  test('debe retornar valores por defecto', () => {
    const { result } = renderHook(() => useFetch('url'));
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });
  test('debe tener la info deseada', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    );
    await waitForNextUpdate({timeout:5000});
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
  test('debe tener de atajar el error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://reqres.in/apityuy/usergttttthfghghs?page=2')
    );
    await waitForNextUpdate({timeout:5000});
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la info');
  });
});
