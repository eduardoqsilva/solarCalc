import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyled } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyled />
    <App />
  </>,
)
