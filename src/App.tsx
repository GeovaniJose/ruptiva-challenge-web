import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'

import { AuthProvider } from './hooks/auth'

import Routes from './routes/index'

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>

    <GlobalStyle />
  </BrowserRouter>
)

export default App
