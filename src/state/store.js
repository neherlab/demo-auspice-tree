import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { createRootReducer } from './reducer'

export async function configureStore() {
  const enhancer = applyMiddleware(thunk)
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?? compose
  const store = createStore(createRootReducer(), {}, composeEnhancers(enhancer))

  if (module.hot) {
    // Setup hot reloading of the root reducer
    module.hot.accept(() => {
      store.replaceReducer(createRootReducer())
      console.info('[HMR] root reducer reloaded successfully')
    })
  }

  return { store }
}
