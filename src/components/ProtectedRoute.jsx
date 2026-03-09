import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  // Admins always have full access
  if (user.role === 'admin') return children

  // Non-paid users go to checkout
  if (user.plan !== 'paid') {
    return <Navigate to="/checkout" replace />
  }

  return children
}
