import { createStateFromQueryOrJSONs } from 'auspice/src/actions/recomputeReduxState'

export function createAuspiceState(auspiceData) {
  return createStateFromQueryOrJSONs({ json: auspiceData, query: {} })
}
