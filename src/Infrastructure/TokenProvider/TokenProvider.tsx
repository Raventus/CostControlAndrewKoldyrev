import React, { createContext, type FC, useContext, useEffect, useMemo, useState } from 'react'

export interface TokenProviderProps {
  children: JSX.Element
}

export type Token = string | null

export interface TokenCallbacks {
  login: () => void
  logout: () => void
}

export type TokenContextType = [Token, TokenCallbacks] | null

const TokenContext = createContext<TokenContextType>(null)

export const useTokenContext = (): TokenContextType => useContext(TokenContext)

export const TokenProvider: FC<TokenProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'))

  useEffect(() => {
    if (token !== null) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  const callbacks = useMemo(
    () => ({
      login: () => {
        setToken(Math.random().toString(16))
        console.log(token)
      },
      logout: () => {
        setToken(null)
        console.log(token)
      }
    }),
    []
  )

  return <TokenContext.Provider value={[token, callbacks]}>{children}</TokenContext.Provider>
}
