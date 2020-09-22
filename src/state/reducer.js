import { combineReducers } from 'redux'

// BEGIN reducers from auspice
import metadata from 'auspice/src/reducers/metadata'
import tree from 'auspice/src/reducers/tree'
import frequencies from 'auspice/src/reducers/frequencies'
import entropy from 'auspice/src/reducers/entropy'
import controls from 'auspice/src/reducers/controls'
import browserDimensions from 'auspice/src/reducers/browserDimensions'
import notifications from 'auspice/src/reducers/notifications'
import narrative from 'auspice/src/reducers/narrative'
import treeToo from 'auspice/src/reducers/treeToo'
// END reducers from auspice

import { auspiceGeneralReducer, auspiceQueryReducer } from './auspice/auspice.reducer'

export function createRootReducer() {
  return combineReducers({
    // BEGIN reducers from auspice
    metadata,
    tree,
    frequencies,
    controls,
    entropy,
    browserDimensions,
    notifications,
    narrative,
    treeToo,
    general: auspiceGeneralReducer,
    query: auspiceQueryReducer,
    // END reducers from auspice
  })
}
