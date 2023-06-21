import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigation } from './Navigation/Navigation/NAvigation'
import { TokenProvider } from './Infrastructure/TokenProvider/TokenProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <TokenProvider>
    <Navigation />
  </TokenProvider>
)
