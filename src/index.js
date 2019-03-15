import React from 'react'
import { render } from 'react-dom'
import StoreProvider from './StoreProvider'

const root = document.createElement('div')
document.body.appendChild(root)

render(<StoreProvider />, root)
