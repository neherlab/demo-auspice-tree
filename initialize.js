import { configureStore } from './state/store'

export async function initialize({ router }) {
  const { store } = await configureStore({ router })
  return { store }
}
