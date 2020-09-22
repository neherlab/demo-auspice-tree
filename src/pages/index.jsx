import React from 'react'

const exampleUrl = `/tree?json=https://data.nextstrain.org/ncov_global.json`

export default function Index() {
  return (
    <div>
      <h1>{'Demo: Auspice tree'}</h1>
      <p>{'In this example, there is nothing on the main page, but you can try to navigate to:'}</p>
      <ul>
        <li>
          <a href="/tree">
            <code>{'/tree'}</code>
          </a>
          <span>{' to display the tree with default data'}</span>
        </li>
        <li>
          <code>{'/tree?json=<URL>'}</code>
          <span>{' to display the tree with the data fetched from a remote URL. For example: '}</span>
          <div>
            <a href={exampleUrl}>
              <code>{exampleUrl}</code>
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}
