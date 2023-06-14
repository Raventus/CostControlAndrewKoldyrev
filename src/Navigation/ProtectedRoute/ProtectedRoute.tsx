import React, { type FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useTokenContext } from '../../Infrastructure/TokenProvider/TokenProvider'

interface ProtectedRouteProps {
  children: JSX.Element
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const tokenContext = useTokenContext()
  const token = tokenContext?.[0]
  const location = useLocation()
  if (token !== null && token !== undefined) {
    return <>{children}</>
  }
  return <Navigate to="/auth" state={{ from: location }} replace />
}
