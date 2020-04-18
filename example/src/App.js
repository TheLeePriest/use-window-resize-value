import React from 'react'
import { useWindowResizeValue } from 'use-window-resize-value'

const App = () => {
  const windowWidth = useWindowResizeValue()
  return (
    <div>
      {windowWidth}
    </div>
  )
}
export default App
