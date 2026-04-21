import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

import { ItemsProvider } from './context/ItemsContext'

const root = document.getElementById('root')

createRoot(root).render(
  <React.StrictMode>
    <HashRouter>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </HashRouter>
  </React.StrictMode>
)