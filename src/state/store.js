import { createStore } from 'redux'

import { createRootReducer } from './reducer'

const noop = () => undefined

export async function configureStore() {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?? noop
  const store = createStore(createRootReducer(), {}, composeEnhancers())

  if (module.hot) {
    // Setup hot reloading of the root reducer
    module.hot.accept(() => {
      store.replaceReducer(createRootReducer())
      console.info('[HMR] root reducer reloaded successfully')
    })
  }

  return { store }
}
