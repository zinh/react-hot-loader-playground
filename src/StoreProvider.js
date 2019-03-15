import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducer from './reducers'
import App from './App'

const store = createStore(Reducer)

if (module.hot){
  module.hot.accept('./reducers', () => store.replaceReducer(Reducer))
}

const StoreProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default StoreProvider
