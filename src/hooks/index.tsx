import React from 'react'

import { AuthProvider } from './auth'
import { ToastProvider } from './toast'
import { CocktailProvider } from './cocktail'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <CocktailProvider>{children}</CocktailProvider>
    </ToastProvider>
  </AuthProvider>
)

export default AppProvider
