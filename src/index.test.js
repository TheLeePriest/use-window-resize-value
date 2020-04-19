import { useWindowResizeValue } from './index'
import { renderHook, act } from '@testing-library/react-hooks'

const fireResizeEvent = width => {
  global.window.innerWidth = width
  global.window.dispatchEvent(new Event('resize'))
}

test('useWindowResizeValue should default to 1024 used by testing global', () => {
  const { result } = renderHook(() => useWindowResizeValue())

  expect(result.current).toBe(1024)
})

test('useWindowResizeValue should default to 1024 then be 1920 after resize event', () => {
  const { result } = renderHook(() => useWindowResizeValue())

  expect(result.current).toBe(1024)

  act(() => {
    fireResizeEvent(1920)
  })

  expect(result.current).toBe(1920)
})

test('useWindowResizeValue should be 500, then 1200, then 1920, then 500', () => {
  const { result } = renderHook(() => useWindowResizeValue())

  act(() => {
    fireResizeEvent(500)
  })

  expect(result.current).toBe(500)

  act(() => {
    fireResizeEvent(1200)
  })

  expect(result.current).toBe(1200)

  act(() => {
    fireResizeEvent(1920)
  })

  expect(result.current).toBe(1920)

  act(() => {
    fireResizeEvent(500)
  })

  expect(result.current).toBe(500)
})
