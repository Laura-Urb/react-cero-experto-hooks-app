import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas useCounter', () => {
  test('debe retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.state).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
  test('debe retornar el state en 100', () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.state).toBe(100);
  });

  test('debe de incrementar', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    expect(result.current.state).toBe(101);
  });
  test('debe de decrementar', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
        decrement();
    });
    expect(result.current.state).toBe(99);
  });
  test('debe de resetear', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;
    act(() => {
        decrement();
        reset()
    });
    expect(result.current.state).toBe(100);
  });
});
