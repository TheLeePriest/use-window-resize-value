import React from 'react'
import { useMyHook } from 'use-window-resize-value'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App