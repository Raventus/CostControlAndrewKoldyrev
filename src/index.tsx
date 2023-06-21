import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigation } from './Navigation/Navigation/NAvigation'
import { TokenProvider } from './Infrastructure/TokenProvider/TokenProvider'
import { Provider } from 'react-redux'
import store from './redux/store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <TokenProvider>
      <Navigation />
    </TokenProvider>
  </Provider>
)
