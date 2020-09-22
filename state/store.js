import { createStore } from 'redux'

import createRootReducer from './reducer'

export async function configureStore({ router }) {
  const store = createStore(createRootReducer())

  if (module.hot) {
    // Setup hot reloading of the root reducer
    module.hot.accept(() => {
      store.replaceReducer(createRootReducer())
      console.info('[HMR] root reducer reloaded successfully')
    })
  }

  return { store }
}
