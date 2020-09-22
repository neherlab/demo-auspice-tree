import React, { useEffect, useState, Suspense } from 'react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import i18n from '../i18n/i18n'
import { initialize } from '../initialize'
import { Loading } from '../components/Loading'

export default function MyApp({ Component, pageProps, router }) {
  const [state, setState] = useState()

  useEffect(() => {
    initialize({ router })
      .then(setState)
      .catch((error) => {
        throw error
      })
  }, [router])

  if (!state) {
    return <Loading />
  }

  const { store } = state

  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </Provider>
    </Suspense>
  )
}
