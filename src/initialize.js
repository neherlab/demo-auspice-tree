import { auspiceStartClean } from './state/auspice/auspice.actions'
import { createAuspiceState } from './state/auspice/createAuspiceState'
import { configureStore } from './state/store'
import { fetchAuspiceJson } from './io/fetchAsupiceJson'

import asupiceDataDefault from './data/auspiceDataDefault.json'

export async function initialize({ router }) {
  let asupiceData = await fetchAuspiceJson(router)
  if (!asupiceData) {
    asupiceData = asupiceDataDefault
  }

  if (!asupiceData) {
    return undefined
  }

  const { store } = await configureStore()

  const auspiceState = createAuspiceState(asupiceData)
  store.dispatch(auspiceStartClean(auspiceState))

  return { store }
}
