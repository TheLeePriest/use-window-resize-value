# use-window-resize-value

A simple React hook that returns the pixel value of the window width on resize.

[![NPM](https://img.shields.io/npm/v/use-window-resize-value.svg)](https://www.npmjs.com/package/use-window-resize-value) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-window-resize-value
```

## Usage

```jsx
import React from 'react'
import { useWindowResizeValue } from 'use-window-resize-value'

const App = () => {
  const windowWidth = useWindowResizeValue()
  return <h1>The current width of the window is: {windowWidth}px</h1>
}

export default App
```

## License

MIT © [TheLeePriest](https://github.com/TheLeePriest)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
