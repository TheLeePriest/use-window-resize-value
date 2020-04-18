# use-window-resize-value

> A simple React hook that returns the value of the window on resize

[![NPM](https://img.shields.io/npm/v/use-window-resize-value.svg)](https://www.npmjs.com/package/use-window-resize-value) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-window-resize-value
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-window-resize-value'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [TheLeePriest](https://github.com/TheLeePriest)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
