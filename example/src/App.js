import React from 'react'
import { useWindowResizeValue } from 'use-window-resize-value'

const App = () => {
  const windowWidth = useWindowResizeValue()
  return <h1>The current width of the window is: {windowWidth}px</h1>
}
export default App
