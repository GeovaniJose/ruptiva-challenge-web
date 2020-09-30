import React, { createContext, useCallback, useContext, useState } from 'react'

import { useAuth } from '../hooks/auth'
import api from '../services/api'

interface CocktailState {
  id: string
  name: string
  alcohol_level: number
  image: string
  ingredients: string[]
}

interface CocktailContextData {
  cocktails: CocktailState[]
  loadCocktails(): Promise<void>
  removeCocktail(id: string): void
}

const CocktailContext = createContext<CocktailContextData>(
  {} as CocktailContextData
)

export const CocktailProvider: React.FC = ({ children }) => {
  const [cocktails, setCocktails] = useState<CocktailState[]>([])

  const { token } = useAuth()

  const loadCocktails = useCallback(async () => {
    const response = await api.get('cocktails', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setCocktails(response.data)
  }, [token])

  const removeCocktail = useCallback(
    async (id) => {
      await api.delete(`cocktails/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setCocktails((state) => state.filter((cocktail) => cocktail.id !== id))
    },
    [token]
  )

  return (
    <CocktailContext.Provider
      value={{ cocktails, loadCocktails, removeCocktail }}
    >
      {children}
    </CocktailContext.Provider>
  )
}

export function useCocktail(): CocktailContextData {
  const context = useContext(CocktailContext)

  if (!context) {
    throw new Error('The useCocktail must be used within an CocktailProvider')
  }

  return context
}
