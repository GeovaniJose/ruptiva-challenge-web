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
  updateUserAvatar(file: FormData): Promise<void>
  updateUser(updateData: Pick<UserData, 'name' | 'age'>): Promise<void>
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

  const updateUserAvatar = useCallback(
    async (file) => {
      const response = await api.patch('/users/avatar', file, {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      data.user.avatar = response.data.avatar
      localStorage.setItem('@Cockta.io:user', JSON.stringify(response.data))
    },
    [data]
  )

  const updateUser = useCallback(
    async (updateData) => {
      const response = await api.put('/users', updateData, {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      localStorage.setItem('@Cockta.io:user', JSON.stringify(response.data))

      setData({ token: data.token, user: response.data })
    },
    [data]
  )

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        user: data.user,
        signIn,
        signOut,
        updateUserAvatar,
        updateUser
      }}
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
