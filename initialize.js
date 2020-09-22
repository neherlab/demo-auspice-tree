import asupiceData from './data/ncov_small.json'
import { auspiceStartClean } from './state/auspice/auspice.actions'
import { createAuspiceState } from './state/auspice/createAuspiceState'
import { configureStore } from './state/store'

export async function initialize({ router }) {
  const { store } = await configureStore({ router })

  const auspiceState = createAuspiceState(asupiceData)
  store.dispatch(auspiceStartClean(auspiceState))

  return { store }
}
