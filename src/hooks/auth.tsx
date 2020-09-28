import React, { createContext, useCallback, useContext, useState } from 'react'

import api from '../services/api'

interface UserData {
  name: string
  age: number
  email: string
  avatar: string
  id: string
}

interface AuthState {
  token: string
  user: UserData
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  token: string
  user: UserData
  signIn(credential: SignInCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Cockta.io:token')
    const user = localStorage.getItem('@Cockta.io:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@Cockta.io:token', token)
    localStorage.setItem('@Cockta.io:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Cockta.io:token')
    localStorage.removeItem('@Cockta.io:user')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ token: data.token, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('The useAuth must be used within an AuthProvider')
  }

  return context
}
