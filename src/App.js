import React from 'react'
import { hot } from 'react-hot-loader/root'

import Counter from './Counter'
import Change from './Change'

const App = () => (
  <div>
    <Change />
    <Counter />
  </div>
)

export default hot(App)
