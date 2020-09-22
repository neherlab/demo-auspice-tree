import React from 'react'

import dynamic from 'next/dynamic'

// Disable Server-side rendering for the tree component.
// Reason: Auspice tree uses d3.js and some of its functions require on `document`, `window`
// and other DOM globals to be present, which are not available during server pass.
// This is only needed if using SSR explicitly or using an SSR-enabled framework, like Next.js.
const AuspiceTree = dynamic(() => import('auspice/src/components/tree'), { ssr: false })

export function Tree() {
  return (
    <div>
      <AuspiceTree width={500} height={500} />
    </div>
  )
}
