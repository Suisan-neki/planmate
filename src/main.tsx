import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import App from './App'
import { I18nProvider } from './i18n/I18n'

const container = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>
)


